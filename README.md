# City Flow

Proyecto web del Taller Integrador II - 2026. La aplicación permite consultar
avisos de cortes, accidentes e inundaciones en una lista y en un mapa, y cargar
nuevos reportes.

## Tecnologías

- Frontend: React, JavaScript, CSS y Vite.
- Backend/API: Supabase, que proporciona una API para consultar y crear reportes.
- Base de datos: PostgreSQL, alojada en Supabase.
- Mapas: Leaflet con cartografía de OpenStreetMap.

## Ejecutar el proyecto

Instalar las dependencias y arrancar el servidor local:

```bash
npm install
npm run dev
```

## Base de datos (Supabase)

La base de datos utiliza PostgreSQL mediante Supabase. La estructura y los permisos de la tabla `public.incidentes` están definidos en dos migraciones SQL:

- `supabase/migrations/20261102000000_create_incidentes.sql`: crea la tabla de incidentes, establece las restricciones iniciales y configura las políticas de acceso (RLS).
- La migración cuyo nombre comienza con `20261107000000`: agrega la columna `direccion` y permite que la referencia adicional sea opcional, con un máximo de 150 caracteres.

La aplicación puede consultar y crear incidentes mediante Supabase. No se implementaron funciones para editar o eliminar reportes desde la interfaz.

Para cargar reportes ficticios en un proyecto vacío, ejecutar una sola vez
[`supabase/seed.sql`](supabase/seed.sql). No volver a ejecutarlo en una base que
ya tenga esos ejemplos para evitar duplicados.

La conexión de React usa la URL del proyecto y la clave pública de Supabase.
Guardarlas en variables locales de entorno y no subirlas al repositorio. Nunca
compartir la contraseña de la base ni la clave `service_role`.


## Integrantes

- Paulina Carignani
- Josefina Beale
- Julieta Lamas
- Ana Paula Quintana
- Ana Paula Gallardo
- Guadalupe Perez Frías
- Milena Godoy Char

## Instalación y configuración desde cero

### Requisitos

- Node.js con npm.
- Conexión a internet.
- URL y clave publicable del proyecto Supabase del equipo.

### Descargar el proyecto

En GitHub, seleccionar Code → Download ZIP y extraer el archivo.
Abrir en Visual Studio Code la carpeta que contiene package.json.

También puede descargarse mediante Git:

```bash
git clone https://github.com/paulinacarignani/city-flow.git
cd city-flow
```

### Instalar las dependencias

Abrir una terminal en la carpeta del proyecto y ejecutar:

```bash
npm ci
```

En Windows, si PowerShell bloquea npm.ps1, usar:

```powershell
npm.cmd ci
```

### Configurar Supabase

Copiar .env.example y nombrar la copia .env.local.
Completar las variables con los datos del proyecto:

```dotenv
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

Solicitar esos valores a la responsable de la conexión.
No usar la contraseña de la base ni la clave service_role.
No subir .env.local al repositorio.

Si se utiliza un proyecto Supabase nuevo, ejecutar las migraciones SQL en el siguiente orden:

1. `supabase/migrations/20261102000000_create_incidentes.sql`: crea la tabla de incidentes y configura sus restricciones y permisos iniciales.
2. La migración de `supabase/migrations` cuyo nombre comienza con `20261107000000`: agrega la dirección aproximada y permite que la referencia adicional sea opcional.

Después, ejecutar una sola vez `supabase/seed.sql` para cargar los datos ficticios de ejemplo.

Si se utiliza la base de datos del equipo, no volver a ejecutar las migraciones sin comprobar cuáles ya están aplicadas.


### Ejecutar la aplicación

```bash
npm run dev
```

En PowerShell puede utilizarse:

```powershell
npm.cmd run dev
```

Abrir la dirección indicada en la terminal, normalmente
http://localhost:5173/.

Mantener la terminal abierta mientras se utiliza la aplicación.
Si cambia .env.local, reiniciar el servidor de desarrollo.

La aplicación no requiere una cuenta de usuario.
Se necesita internet para Supabase y el fondo del mapa.

## Funciones de la versión actual

- Crear reportes de cortes, accidentes e inundaciones.
- Seleccionar la ubicación del incidente en un mapa.
- Obtener automáticamente una dirección aproximada a partir de la ubicación seleccionada.
- Validar los campos obligatorios: tipo de incidente y ubicación.
- Permitir una referencia adicional opcional de hasta 150 caracteres.
- Guardar una descripción opcional de hasta 500 caracteres.
- Consultar reportes en lista y mapa.
- Abrir la información desde un marcador.
- Conservar los reportes al reiniciar el frontend.

## Funciones pendientes

- Filtros por tipo o zona.
- Fotografías.
- Notificaciones al celular.
- Estado de resolución de los reportes.
- Búsqueda por zona y cálculo de rutas.

## Documentación

- [Manual de usuario](docs/manual-usuario.md)
- [Registro de pruebas](docs/pruebas.md)
- [Antecedentes y conclusiones](docs/proyecto.md)
- [Diseño de la base de datos](docs/diseno-bd.md)

## Captura de la aplicación

![Vista principal de City Flow](docs/capturas/image.png)

## Uso de inteligencia artificial

Utilizamos ChatGPT como apoyo para definir el nombre y el boceto
inicial, comprender conceptos, organizar la documentación,
preparar casos de prueba y revisar el proyecto.

Los resultados funcionales registrados por Milena corresponden
a las pruebas realizadas en su computadora.