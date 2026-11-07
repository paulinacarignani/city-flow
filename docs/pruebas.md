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
