import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from '@modules/report/entities/report.entity';

@Controller('pdf')
export class PdfController {
  constructor(
    private readonly pdfService: PdfService,
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  @Get('demo')
  async getDemoPdf(@Res() res: Response, @Query('title') title: string) {
    const docDefinition = {
      content: [
        { text: title || 'Demo PDF', style: 'header' },
        { text: 'Este es un PDF generado con pdfmake y NestJS.' },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      },
    };
    const buffer = await this.pdfService.generatePdf(docDefinition);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="demo.pdf"',
    });
    res.end(buffer);
  }

  @Get('informes')
  async getInformesPdf(@Res() res: Response) {
    const informes = await this.reportRepository.find({ relations: ['registration'] });
    const buffer = await this.pdfService.generateInformePdf(informes);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="informes.pdf"',
    });
    res.end(buffer);
  }

  @Get('usuario-eventos')
  async getUsuarioEventosPdf(@Res() res: Response, @Query('userId') userId: number) {
    // Consulta compuesta usando TypeORM
    const registros = await this.reportRepository.manager.getRepository('Registration').find({
      where: { user: { id: userId } },
      relations: [
        'user',
        'event',
        'event.eventDetails',
        'assistances',
      ],
      order: {
        event: {
          eventDetails: {
            startDate: 'DESC',
            startTime: 'DESC',
          },
        },
      },
    });

    // Aplanar los datos para la tabla
    const rows: any[][] = [];
    for (const reg of registros) {
      const user = reg.user;
      const event = reg.event;
      const eventDetail = event.eventDetails && event.eventDetails[0];
      const asistencia = reg.assistances && reg.assistances[0];
      rows.push([
        user.id,
        `${user.name} ${user.lastName}`,
        eventDetail ? `${eventDetail.startDate.toLocaleDateString('es-PE')} a las ${eventDetail.startTime}` : '',
        event.name,
        event.status,
        asistencia ? asistencia.status : '',
      ]);
    }

    const buffer = await this.pdfService.generateUsuarioEventosPdf(rows);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="usuario_eventos.pdf"',
    });
    res.end(buffer);
  }
}