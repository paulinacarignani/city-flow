# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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
