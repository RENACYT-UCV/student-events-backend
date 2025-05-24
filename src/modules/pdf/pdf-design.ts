export function historialPdfDesign({ userName, date, rows }) {
  return {
    content: [
      {
        columns: [
          [
            { text: 'UniEventos', style: 'title' },
            { text: userName, style: 'subtitle' },
          ],
          {
            text: `Fecha: ${date}`,
            alignment: 'right',
            margin: [0, 10, 0, 0],
          },
        ],
        margin: [0, 0, 0, 20],
      },
      { text: 'Mi historial', style: 'sectionTitle', margin: [0, 0, 0, 10] },
      {
        table: {
          headerRows: 1,
          widths: [120, '*', 70, 70],
          body: [
            [
              { text: 'Fecha y hora', style: 'tableHeader' },
              { text: 'Nombre del evento', style: 'tableHeader' },
              { text: 'Estado', style: 'tableHeader' },
              { text: 'Asistencia', style: 'tableHeader' },
            ],
            ...rows,
          ],
        },
        layout: {
          fillColor: function (rowIndex) {
            return rowIndex === 0 ? '#0B4F6C' : rowIndex % 2 === 0 ? '#F4F4F4' : null
          },
          hLineColor: function () {
            return '#B0B0B0'
          },
          vLineColor: function () {
            return '#B0B0B0'
          },
        },
      },
    ],
    styles: {
      title: { fontSize: 20, bold: true, color: '#0B4F6C' },
      subtitle: { fontSize: 12, color: '#333', margin: [0, 0, 0, 5] },
      sectionTitle: { fontSize: 14, bold: true, color: '#0B4F6C' },
      tableHeader: {
        fillColor: '#0B4F6C',
        color: 'white',
        bold: true,
        fontSize: 11,
        alignment: 'center',
      },
    },
    defaultStyle: {
      fontSize: 10,
    },
    pageMargins: [30, 40, 30, 40],
  }
}
