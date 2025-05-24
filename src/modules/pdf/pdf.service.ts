import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { Injectable } from '@nestjs/common'
import { Report } from '@modules/report/entities/report.entity'

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs

@Injectable()
export class PdfService {
  async generatePdf(docDefinition: any): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const pdfDocGenerator = pdfMake.createPdf(docDefinition)
      pdfDocGenerator.getBuffer((buffer: Buffer) => {
        resolve(buffer)
      })
    })
  }

  async generateInformePdf(informes: Report[]): Promise<Buffer> {
    const docDefinition = {
      content: [
        { text: 'Listado de Informes', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', '*'],
            body: [
              ['ID', 'ID Registro'],
              ...informes.map(inf => [inf.id, inf.registration ? inf.registration.id : '']),
            ],
          },
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      },
    }
    return this.generatePdf(docDefinition)
  }

  async generateUsuarioEventosPdf(rows: any[][]): Promise<Buffer> {
    const docDefinition = {
      content: [
        { text: 'Listado de Eventos y Asistencias del Usuario', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', '*', '*', '*', '*', '*'],
            body: [
              ['ID Usuario', 'Nombre', 'Fecha y hora', 'Nombre del evento', 'Estado', 'Asistencia'],
              ...rows,
            ],
          },
        },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
      },
      pageOrientation: 'landscape',
    }
    return this.generatePdf(docDefinition)
  }
}
