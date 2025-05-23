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
}