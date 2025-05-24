import { Controller, Get, Query, Res } from '@nestjs/common'
import { Response } from 'express'
import { PdfService } from './pdf.service'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Report } from '@modules/report/entities/report.entity'
import { historialPdfDesign } from './pdf-design'

@Controller('pdf')
export class PdfController {
  constructor(
    private readonly pdfService: PdfService,
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  @Get('usuario-eventos')
  async getUsuarioEventosPdf(@Res() res: Response, @Query('userId') userId: number) {
    // Consulta compuesta usando TypeORM
    const registros = await this.reportRepository.manager.getRepository('Registration').find({
      where: { user: { id: userId } },
      relations: ['user', 'event', 'event.eventDetails', 'assistances'],
      order: {
        event: {
          eventDetails: {
            startDate: 'DESC',
            startTime: 'DESC',
          },
        },
      },
    })

    // Aplanar los datos para la tabla
    const rows: any[][] = []
    let userName = ''
    for (const reg of registros) {
      const user = reg.user
      const event = reg.event
      const eventDetail = event.eventDetails && event.eventDetails[0]
      const asistencia = reg.assistances && reg.assistances[0]
      if (!userName && user) userName = `${user.name}`
      rows.push([
        eventDetail
          ? `${eventDetail.startDate.toLocaleDateString('es-PE')} a las ${eventDetail.startTime}`
          : '',
        event.name,
        event.status,
        asistencia ? asistencia.status : 'No asistió',
      ])
    }
    const date = new Date().toLocaleDateString('es-PE')
    const docDefinition = historialPdfDesign({ userName, date, rows })
    const buffer = await this.pdfService.generatePdf(docDefinition)
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="usuario_eventos.pdf"',
    })
    res.end(buffer)
  }
}
