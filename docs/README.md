# Controla Acceso Backend

## Descripción General

**Controla Acceso Backend** es una API desarrollada en Node.js utilizando Express, Sequelize y JWT para proporcionar autenticación y autorización. Esta API está diseñada para manejar las operaciones de un sistema de control de acceso, gestionando usuarios, roles, establecimientos, propiedades, permisos y registros de acceso.

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Instalación y Configuración](#instalación-y-configuración)
3. [Guía de Desarrollador](#guía-de-desarrollador)
4. [API Documentation](#api-documentation)
5. [Base de Datos](#base-de-datos)
6. [Seguridad](#seguridad)
7. [Despliegue](#despliegue)
8. [Mantenimiento y Soporte](#mantenimiento-y-soporte)
9. [Anexos](#anexos)

## Introducción

### Objetivos

El objetivo principal del proyecto es proporcionar una API robusta y segura para gestionar usuarios, establecimientos, propiedades,  roles y permisos en un sistema de control de acceso. La API está diseñada para ser fácil de usar, extender y mantener.

### Alcance

El proyecto cubre las siguientes áreas:
- Autenticación y autorización de usuarios.
- Gestión de roles y permisos.
- Gestión de establecimientos y propiedades.
- Registro y seguimiento de accesos.

### Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo de aplicaciones en JavaScript.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para Node.js.
- **JWT**: Autenticación basada en tokens.
- **MySQL**: Sistema de gestión de bases de datos relacional.

## Instalación y Configuración

### Requisitos Previos

- Node.js >= 14
- npm >= 6
- MySQL

### Guía de Instalación

1. Clona el repositorio:

   ```bash
   git clone https://steven.betancur-at-814231045142:f1YLB9y1p8je5mgWUr9Yqz7Zl4%2FhKUEnwXURoGb4t9E%3D@git-codecommit.us-east-1.amazonaws.com/v1/repos/access-control-api
   cd access-control-api

2. Instala las dependencias:
    ```bash 
    npm install

### Configuración Inicial
1. Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

    ```bash
    DB_USERNAME=
    DB_PASSWORD=
    DB_NAME=
    DB_HOST=
    JWT_SECRET=
    JWT_EXPIRATION=

### Variables de Entorno
- DB_USERNAME: Nombre de usuario de la base de datos.
- DB_PASSWORD: Contraseña de la base de datos.
- DB_NAME: Nombre de la base de datos.
- DB_HOST: Host de la base de datos.
- JWT_SECRET: Clave secreta para JWT.
- JWT_EXPIRATION: Tiempo de expiración del token JWT.

## Guía de Desarrollador

### Estructura del Proyecto
```
    src/
    controllers/
    middlewares/
    repositories/
    routes/
    services/
    app.js
    server.js
    config/
    migrations/
    models/
    node_modules/
    seeders/
    templates/
    .env
    .env.example
    .gitignore
    generate-module.sh
    package.json
    yarn.lock
```

### Creación de Módulos

Para crear un nuevo módulo, puedes utilizar el script ```generate-module.sh```.

1. Ejecuta el siguiente comando para generar un nuevo módulo:
    ```bash
    ./generate-module.sh <ModuleName> <ModuleNamePlural>
    
Por ejemplo, para crear un módulo Role:
    ```./generate-module.sh Role roles```

2. El script generará los archivos necesarios en los directorios correspondientes (Routes, Controller, Service, Repository, Body Middleware) y agregará las rutas al archivo app.js.

### Guía de Estilo de Código

- Sigue las convenciones de codificación de JavaScript.
- Usa linters para mantener la consistencia del código.
- Escribe comentarios claros y concisos.


## API Documentation

La documentación completa de la API está disponible en el siguiente enlace:
 [Documentación de la API](https://documenter.getpostman.com/view/20263128/2sA3JDfjqW)

## Base de Datos

### Esquema

![Diagrama de la Base de Datos](./images/database-schema.png)

### Migraciones
Las migraciones son una parte esencial de la gestión de cambios en el esquema de la base de datos. Las migraciones permiten realizar cambios en la estructura de la base de datos de manera organizada y repetible.

### Beneficios de Usar Migraciones
- Control de Versiones: Las migraciones permiten mantener un historial de los cambios en la base de datos, facilitando la colaboración entre desarrolladores.
- Despliegue Sincronizado: Asegura que la estructura de la base de datos esté sincronizada con el código de la aplicación en todos los entornos (desarrollo, prueba, producción).
- Automatización: Facilita la automatización de los cambios en la base de datos, reduciendo errores manuales.

### Ejecutar Migraciones con Sequelize CLI
Para ejecutar las migraciones, usa el CLI de Sequelize. Aquí hay algunos comandos útiles:

- Crear una nueva migración:

    ```bash
    npx sequelize-cli migration:generate --name <migration-name>

- Ejecutar todas las migraciones pendientes:

    ```bash
    npx sequelize-cli db:migrate

- Revertir la última migración:

    ```bash
    npx sequelize-cli db:migrate:undo

Para más información consulte la documentación de Sequelize en los anexos.

## Seguridad
### Prácticas de Seguridad Implementadas
- Autenticación mediante JWT.
- Autorización basada en roles y permisos.
- Protección contra ataques de fuerza bruta con express-rate-limit.
- Uso de helmet para configurar cabeceras HTTP seguras.

### Manejo de Errores y Excepciones
- Los errores son manejados mediante middlewares de manejo de errores.
- Se registran los errores para su análisis posterior.

## Despliegue

### Entorno de Producción
1. Configura las variables de entorno para el entorno de producción.
2. Usa un servidor web como AWS para servir la aplicación.
3. Asegúrate de que todas las dependencias estén instaladas y actualizadas.

## Mantenimiento y Soporte
### Procedimientos de Mantenimiento
- Revisión periódica del código.
- Actualización de dependencias.
- Monitoreo de la aplicación en producción.

## Anexos
### Glosario
JWT: JSON Web Token

### Referencias
- [Documentación de Node.js](https://nodejs.org/docs/latest/api/)
- [Documentación de Express](https://expressjs.com/es/)
- [Documentación de Sequelize](https://sequelize.org/)