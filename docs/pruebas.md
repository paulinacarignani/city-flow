# Registro de pruebas de City Flow

Responsable: Milena Godoy Char
Fecha: 6 de noviembre de 2026
Entorno: Windows, ejecución local mediante Vite y conexión a Supabase.

| Prueba | Resultado observado | Estado |
|---|---|---|
| Instalación de dependencias | npm.cmd ci terminó correctamente e instaló 155 paquetes. | Aprobada |
| Apertura local | La aplicación abrió en localhost:5173. | Aprobada |
| Consulta de reportes | Se mostraron los reportes existentes en Últimos avisos. | Aprobada |
| Ubicación obligatoria | Al enviar sin seleccionar ubicación apareció un mensaje y se impidió el envío. | Aprobada |
| Guardado de un reporte | Se creó PRUEBA Milena 01 y apareció la confirmación. | Aprobada |
| Visualización en lista | PRUEBA Milena 01 apareció en Últimos avisos. | Aprobada |
| Persistencia | Después de detener y reiniciar el frontend y recargar la página, el reporte seguía disponible. | Aprobada |
| Información en el mapa | Al pulsar el círculo naranja se abrió la información de PRUEBA Milena 01. | Aprobada |
| Referencia obligatoria | El navegador impidió enviar el formulario con la referencia vacía. | Aprobada |
| Referencia de dos caracteres | El navegador rechazó AB y solicitó al menos tres caracteres. | Aprobada |
| Referencia con espacios | Se rechazó una referencia formada por tres espacios. | Aprobada |
| Máximo de descripción | El campo permitió ingresar hasta 500 caracteres e impidió agregar más. |

## Actualización de las validaciones del formulario

Después de las pruebas iniciales del 6 de noviembre de 2026, se actualizó el formulario para que la referencia adicional sea opcional.

En la versión actual:
- El tipo de incidente y la selección de una ubicación son obligatorios.
- La referencia adicional es opcional y admite hasta 150 caracteres.
- La descripción es opcional y admite hasta 500 caracteres.
- La dirección aproximada se obtiene automáticamente a partir del punto seleccionado en el mapa.

Las pruebas registradas anteriormente sobre referencia obligatoria, mínimo de tres caracteres y rechazo de referencias vacías corresponden a la versión anterior del formulario y no representan las validaciones actuales.

La configuración actual de la tabla `incidentes` en Supabase admite referencias `NULL` y establece un máximo de 150 caracteres para las referencias proporcionadas.
