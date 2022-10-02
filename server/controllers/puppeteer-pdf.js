const puppeteer = require('puppeteer');

async function crearPdf(url) {

    // Abrir el navegador
    let navegador = await puppeteer.launch();

    // Creamos una nueva pestaña o pagina
    let pagina = await navegador.newPage();

    // Abrir la url dentro de esta pagina
    await pagina.goto(url);

    // Vamos a crear nuestro PDF
    let pdf = await pagina.pdf();

    // Cerrar el navegador
    navegador.close();

    return pdf;
}

module.exports = {

    proyecto(req, res) {
        res.render('pdfs/proyecto', { layout: "pdf" });
    },

    async descargar(req, res) {

        let project_id = req.params.project_id;        

        // Crear nuestro documento
        let pdf = await crearPdf(`http://localhost:3000/project/${project_id}`);


        // Devolver el response como PDF
        res.contentType('application/pdf');
        res.send(pdf);
    }

}