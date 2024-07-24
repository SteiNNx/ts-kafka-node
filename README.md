# Servicio ts-kafka
## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Docker](https://www.docker.com/get-started) (para contenerización)
- [Docker Compose](https://docs.docker.com/compose/install/) (para orquestación de contenedores)
- [Node.js](https://nodejs.org/) (recomendado: versión 14 o 16)
- [npm](https://www.npmjs.com/get-npm) (para gestionar dependencias de Node.js)

## Instalación

Para instalar las dependencias y preparar el entorno de desarrollo, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```

2. Ejecuta el script de instalación y compilación:

   ```bash
   sh infrastructure/scripts/init_install.sh
   ```

   Este script realizará las siguientes tareas:
   - Instalación de las dependencias del proyecto.
   - Compilación del código fuente.

## Compilación y Uso

El script de instalación también compilará el proyecto automáticamente. Si necesitas realizar una compilación manual, puedes hacerlo con el siguiente comando:

```bash
npm run build
npm start
```

## Configuración Opcional: Kafka Local

Si tu proyecto requiere un entorno Kafka local para pruebas o desarrollo, puedes configurarlo siguiendo estos pasos:

1. **Levanta el entorno Kafka local**:

   Ejecuta el siguiente script para iniciar el entorno Kafka:

   ```bash
   sh infrastructure/scripts/suite-kafka-local.sh 
   ```

2. **Ejecuta la aplicación Node**:

   Inicia tu aplicación Node.js con el siguiente comando:

   ```bash
   npm start
   ```

   Este script realizará las siguientes tareas:

   - Iniciará un contenedor de Kafka utilizando Docker.
   - Configurará el entorno Kafka según las variables definidas en el archivo `.env` y el archivo [docker-compose.yml](infrastructure/docker/docker-compose.yml).
   - Expondrá las interfaces necesarias para interactuar con Kafka a través de `http://localhost:8085/`.

   **Nota:** Asegúrate de que Docker y Docker Compose estén instalados y en funcionamiento antes de ejecutar este script.
