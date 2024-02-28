# Museo de Bicicletas 🚲

[![Jessica Noguera](https://img.icons8.com/ios-filled/50/000000/github.png)](https://github.com/JnogueraGonzalez/) Jessica Noguera [![Fatima Cosme](https://img.icons8.com/ios-filled/50/000000/github.png)](https://github.com/pointfs) Fatima Cosme [![Saray Rodriguez](https://img.icons8.com/ios-filled/50/000000/github.png)](https://github.com/SarayAnta) Saray Rodriguez [![Elena López](https://img.icons8.com/ios-filled/50/000000/github.png)](https://github.com/elenalope) Elena López [![Usuario 5](https://img.icons8.com/ios-filled/50/000000/github.png)](https://github.com/usuario5) Usuario5

¡Bienvenido al Museo de Bicicletas!

Este proyecto es una aplicación web desarrollada con React que sirve como un museo virtual de bicicletas, donde los usuarios pueden ver diferentes modelos de bicicletas, agregar nuevas bicicletas, editar y eliminar modelos existentes, y explorar una galería de imágenes relacionadas con el ciclismo.

## Descripción

El Museo de Bicicletas es una aplicación web desarrollada con React que te permite sumergirte en el fascinante mundo de las bicicletas. Con una interfaz intuitiva y atractiva, podrás explorar diferentes modelos, agregar nuevos ejemplares, editar detalles y eliminar modelos existentes. Además, podrás disfrutar de una galería de imágenes relacionadas con el ciclismo que te inspirarán a rodar.

## Instalación

Para comenzar a explorar el Museo de Bicicletas en tu propio entorno, sigue estos sencillos pasos:

1. **Clona el Repositorio:**

    ```bash
    git clone https://github.com/SarayAnta/proyecto05-museo
    ```

2. **Instala las Dependencias:**

    ```bash
    cd proyecto05-museo
    npm install
    ```

3. **Inicia la Aplicación:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en [http://localhost:5173/](http://localhost:5173/)

## Uso

Una vez que la aplicación esté instalada y ejecutándose, puedes hacer lo siguiente:

- Explorar modelos de bicicletas: Navega por la página de inicio para ver todos los modelos de bicicletas disponibles.
- Agregar una nueva bicicleta: Haz clic en el botón "Añadir Bicicleta" para agregar un nuevo modelo de bicicleta al museo.
- Editar una bicicleta existente: Haz clic en el botón "Editar" junto a un modelo de bicicleta para editar sus detalles.
- Eliminar una bicicleta: Haz clic en el botón "Eliminar" junto a un modelo de bicicleta para eliminarlo del museo.
- Explorar la galería de imágenes: Visita la sección de la galería para ver imágenes relacionadas con el ciclismo.

## Tecnologías Utilizadas

Las tecnologías principales que hemos utilizado para desarrollar esta aplicación web:

React - React Router - Styled Components - Fetch API - Vite - Jest 

# Organización del Proyecto

El proyecto está estructurado de la siguiente manera:

src/
|-- activos/
| |-- img/
| | |-- Galería1.png
| | |-- FondoHome.png
| | |-- ...
| |-- sonido/
| |-- 7TSW2M4-timbre-bicicleta.mp3
| |-- ...
|-- componentes/
| |-- tarjeta/
| | |-- Tarjeta.jsx
| |
| |-- editar/
| | |-- Editar.jsx
| |
| |-- pie de página/
| | |-- Pie de página.jsx
| |
| |-- galería/
| | |-- Galería.jsx
| |
| |-- inicio/
| | |-- Inicio.jsx
| |
| |-- diseño/
| | |-- DiseñoPublic.jsx
| |
| |-- nav/
| | |-- Nav.jsx
| |
| |-- nuevo elemento/
| |-- NuevoItem.jsx
|-- enrutador/
| |-- enrutador.jsx
|
|-- servicios/
| |-- servicio.js
|
|-- index.html
|-- index.js

## Código

El código proporcionado se refiere a la configuración y desarrollo de una aplicación web utilizando React.js y Vite.js. Aquí está la lógica general del código:

1. **Configuración del entorno y herramientas**: Se utilizan diversas herramientas y tecnologías para desarrollar la aplicación, incluidos React.js para la creación de interfaces de usuario, Vite.js como herramienta de construcción y servidor de desarrollo, y otras dependencias como react-router-dom y styled-components para estilos.

2. **Estructura del proyecto**: El proyecto se organiza en diferentes carpetas según la función de los archivos, como componentes para los componentes de React, servicios para funciones de servicio como la comunicación con la API, router para definir las rutas de la aplicación, entre otras.

3. **Componentes React**: Se definen varios componentes de React que componen la interfaz de usuario de la aplicación, como Home, NewItem, Edit, Gallery, Card, Nav, Footer, etc. Cada componente tiene su propio propósito y funcionalidad dentro de la aplicación.

4. **Estilos**: Los estilos se definen utilizando styled-components para crear estilos CSS en línea dentro de los componentes de React. Esto permite un desarrollo más modular y mantenible de los estilos.

5. **Gestión de rutas**: Se utiliza react-router-dom para gestionar la navegación y las rutas de la aplicación. Esto permite que la aplicación tenga diferentes vistas y páginas que se renderizan según la URL actual.

6. **Comunicación con la API**: Se definen funciones en el directorio de servicios para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos o en algún backend externo. Estas funciones utilizan fetch para realizar solicitudes HTTP a la API.

7. **Integración de sonidos**: Se integra un archivo de audio para reproducir un sonido cuando se realiza una acción en la aplicación, como agregar un nuevo elemento.

En resumen, el código proporcionado muestra la configuración y desarrollo de una aplicación web utilizando React.js y Vite.js, junto con otras herramientas y tecnologías complementarias para construir una aplicación funcional con estilos personalizados, gestión de rutas, comunicación con la API y otras características.



## Cloudinary: Gestión de Imágenes

Hemos integrado la funcionalidad de almacenamiento y gestión de imágenes utilizando Cloudinary. Esto nos permite ofrecer una experiencia óptima a nuestros usuarios al optimizar la carga, almacenamiento, gestión y entrega de los medios.

### ¿Qué es Cloudinary?

Cloudinary es una solución de Software como Servicio (SaaS) que proporciona una solución completa para las necesidades de imágenes y videos en aplicaciones web o móviles.

### Configuración para Nuestro Proyecto

Para integrar Cloudinary en nuestro proyecto de Market Place, hemos seguido estos pasos:

1. **Crea una Cuenta en Cloudinary:**

    Regístrate en Cloudinary de forma gratuita a través del siguiente enlace: [https://cloudinary.com/](https://cloudinary.com/).

2. **Obtén Credenciales de Acceso:**

    Asegúrate de obtener las credenciales necesarias, incluyendo el `Cloudname`, `Api Key` y `Api Secret`.

3. **Configura Cloudinary en el Proyecto:**

    Sigue las instrucciones proporcionadas en la documentación oficial de Cloudinary para configurar la integración en tu proyecto.

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función o corrección de errores.
3. Realiza tus cambios y haz commits.
4. Sube tus cambios a tu repositorio.
5. Envía un pull request con tus cambios.

## Contacto

Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en ponerte en contacto con nosotros por correo electrónico o a través de nuestras redes sociales. ¡Esperamos que disfrutes explorando el Museo de Bicicletas!

¡Gracias por tu interés y apoyo! Pedalea con nosotros hacia un futuro lleno de aventuras en dos ruedas. 🚲✨

