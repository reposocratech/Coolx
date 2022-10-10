# Coolx
> Este proyecto es una aplicación web realizada para la empresa Coolx. "En Coolx nos encargamos de optimizar el  registro y la evaluación de tus proyectos forestales. Mediante teledetección y big data, disminuimos el tiempo necesario para que tu consultoría medioambiental genere créditos de carbono".
> Vídeo presentación en YouTube: XXXXXXXXXXXXX


## Tabla de Cotenidos
* [Información General](https://github.com/reposocratech/Coolx/edit/master/README.md#informaci%C3%B3n-general)
* [Tecnologías utilizadas](#technologies-used)
* [Características](#features)
* [Capturas](#screenshots)
* [Instalación y configuración](#setup)
* [Agradecimientos](#acknowledgements)
* [Contacto](#contact)
* [Licencia](#license)


## Información General
- El administrador puede crear proyectos, modificarlos, cambiar su estado y eliminarlos; también puede buscar y ordenar proyectos por nombre, país y ganancias. Además, puede crear usuarios, ver un listado de los mismos y asignarles proyectos.
- El usuario puede registrarse, editar su perfil, crear y editar sus propios proyectos y ver un listado de los mismos; también puede ver un listado de los proyectos disponibles para invertir y realizar la compra de los mismos, además de de ponerse en contacto con la empresa.


## Tecnologías utilizadas
- Front-end: HTML5 - SASS - Bootstrap - JavaScript
- Back-end: Node.js - Express [  Otras librerías:  MySql  |  Multer  |  Bcrypt  |  Nodemon  |  Nodemail  |  Puppeteer  ]
- Base de datos: MySQL


## Características
- Contraseñas encriptadas.
- Diseño responsive.
- Envío de emails desde formulario de contacto y desde registro de usuario.
- Recuperación de contraseña a través de email.
- Conversión a formato PDF y descarga del fichero.


## Capturas
![Example screenshot](./public/screenshots/screenshot1.png)
<br/>
<br/>
![Example screenshot](./public/screenshots/screenshot2.png)
<br/>
<br/>
![Example screenshot](./public/screenshots/screenshot4.png)
<br/>
<br/>
![Example screenshot](./public/screenshots/screenshot5.png)
<br/>
<br/>
![Example screenshot](./public/screenshots/screenshot3.png)


## Instalación y configuración
1 - Crear la base de datos mediante el script coolx.sql, localizado en el directorio /client/public
<br/>
2 - Copiar el archivo .env (proporcionado aparte, no disponible en este repositorio) en el directorio /server
<br/>
3 - Desde el directorio /server, ejecutar: 
   npm i
Esto instalará las dependencias necesarias en el servidor.
<br/>
4 - Desde el directorio /client, ejecutar:
   npm i
Esto instalará las dependencias necesarias en el cliente.
<br/>
5 - Desde el directorio /server, lanzar el servidor mediante el comando:
   npm run dev
<br/>
6 - Desde el directorio /client, ejecutar el cliente mediante el comando:
      npm start
<br/>
7 - En el navegador, ir a la dirección: 
   localhost:3000
<br/>
8 - La aplicación web se ejecutará entonces en el navegador.


## Agradecimientos
- Este proyecto ha sido realizado como parte del Bootcamp Fullstack Web Developer en [Socratech](https://socratech.es/).
- Agradecimientos a los formadores Carlos Yañez, Miriam Segura y Santigo Peña por su ayuda y dedicación.
- Agradecimientos a la empresa Coolx por confiar en nosotros.


## Contacto
Este proyecto ha sido realizado por un equipo de cinco desarrolladores compuesto por:
- [Pablo Fuentes](https://www.linkedin.com/in/pablo-fuentes-quirosa/)
- [Franco Amoroso](https://www.linkedin.com/in/francoamoroso/)
- [Andrea Sosa](https://www.linkedin.com/in/andrea-sosamolina/)
- [Jose Antonio Posada](https://www.linkedin.com/in/jose-antonio-posada/)
- [Bárbara Jiménez](https://www.linkedin.com/in/barbarajg/)
