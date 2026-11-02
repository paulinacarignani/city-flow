# city-flow
Proyecto City Flow - Taller Integrador II - 2026

## Base de datos (Supabase)

La estructura de la tabla `public.incidentes` y sus permisos están en
[`supabase/migrations/20261102000000_create_incidentes.sql`](supabase/migrations/20261102000000_create_incidentes.sql).
La migración crea el ID y la fecha automáticamente, valida los tipos permitidos,
la referencia y las coordenadas, y activa RLS. La aplicación puede consultar y
crear incidentes; no puede modificarlos ni borrarlos.

Para cargar reportes ficticios en un proyecto vacío, ejecutar una sola vez
[`supabase/seed.sql`](supabase/seed.sql). No volver a ejecutarlo en una base que
ya tenga esos ejemplos para evitar duplicados.

La conexión de React usa la URL del proyecto y la clave pública de Supabase.
Guardarlas en variables locales de entorno y no subirlas al repositorio. Nunca
compartir la contraseña de la base ni la clave `service_role`.
