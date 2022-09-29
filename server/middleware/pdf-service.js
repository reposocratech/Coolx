PDFDocument = require('pdfkit');

function buildPDF(projectData, dataCallback, endCallback){

    const doc = new PDFDocument();

    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    doc
        // .font('fonts/PalatinoBold.ttf')
        // .fontSize(25)
        .text('Texto de prueba ' + projectData);
    doc.end();

}

module.exports = {buildPDF};