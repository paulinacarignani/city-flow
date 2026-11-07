# Diseño de la base de datos

City Flow utiliza PostgreSQL mediante Supabase.

## Tabla incidentes

Guarda los reportes ciudadanos con su tipo, referencia,
descripción, ubicación y fecha de carga.

| Campo | Tipo | Qué guarda |
|---|---|---|
| id | bigint | Identificador único generado automáticamente |
| tipo | text | corte, accidente o inundacion |
| referencia | text | Calle, esquina o lugar del incidente |
| direccion | text | Dirección aproximada obtenida automáticamente |
| descripcion | text | Información adicional opcional |
| latitud | double precision | Coordenada de latitud |
| longitud | double precision | Coordenada de longitud |
| creado_en | timestamptz | Fecha y hora de carga generadas automáticamente |

## Diagrama

```mermaid
erDiagram
    INCIDENTES {
        bigint id PK
        text tipo
        text referencia
        text direccion
        text descripcion
        double_precision latitud
        double_precision longitud
        timestamptz creado_en
    }
```

Esta versión utiliza una sola tabla, sin relaciones con otras tablas.


## Restricciones definidas en el script

- El tipo debe ser corte, accidente o inundacion.
- La referencia adicional es opcional y admite hasta 150 caracteres después de quitar los espacios externos.
- Si no se proporciona una referencia adicional, puede almacenarse como NULL.
- La descripción es opcional y admite hasta 500 caracteres.
- La latitud es obligatoria y debe estar entre -90 y 90.
- La longitud es obligatoria y debe estar entre -180 y 180.
- El identificador y la fecha se generan en la base.

## Acceso a los datos

El script activa Row Level Security y define políticas
para consultar y crear incidentes.

No define políticas para modificar o eliminar reportes
desde la aplicación.

La comprobación de los permisos y restricciones en la
base real queda pendiente con las responsables de Supabase.

## Archivos SQL

**Primera migración (2 de noviembre de 2026):**

`supabase/migrations/20261102000000_create_incidentes.sql`

Crea la tabla `incidentes`, sus restricciones iniciales y los permisos de acceso.

**Segunda migración (7 de noviembre de 2026):**

Archivo de la carpeta `supabase/migrations` que comienza con `20261107000000`.

Agrega la columna `direccion` para guardar la dirección aproximada obtenida a partir del mapa. También modifica la referencia adicional para que sea opcional y tenga un máximo de 150 caracteres.

**Datos ficticios de ejemplo:**

`supabase/seed.sql`

Contiene los datos de prueba utilizados para cargar incidentes de ejemplo.

Las dos migraciones se aplican en orden para obtener la estructura actual de la base de datos.

