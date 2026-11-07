# Proyecto City Flow

## Antecedentes

En el TP1 identificamos la dificultad de conocer cortes,
accidentes e inundaciones antes de llegar al lugar.
Propusimos City Flow como una aplicación para reunir
y consultar reportes ciudadanos en Tucumán.

Trabajamos los conceptos de producto mínimo viable,
Lean Startup y Design Thinking para definir una primera
versión sencilla del proyecto.

En el TP2 organizamos las funcionalidades en un backlog
con épicas, historias de usuario, criterios de aceptación
y prioridades. Incluimos reportes, avisos, visualización
de incidentes y ayuda para la circulación.

## Solución desarrollada

Construimos una aplicación web con React, JavaScript y CSS,
utilizando Vite para ejecutarla y generar su versión de distribución.

La aplicación permite registrar cortes, accidentes e inundaciones.
El formulario solicita tipo, referencia, descripción opcional
y una ubicación seleccionada en el mapa.

Supabase proporciona la conexión con PostgreSQL,
donde se almacenan los reportes. Leaflet permite mostrar
el mapa con cartografía de OpenStreetMap.

Los reportes se consultan en una lista y en el mapa.
Al seleccionar un marcador se abre la información del incidente.

## Alcance y funciones pendientes

La versión actual incluye:

- Formulario con validaciones.
- Selección de ubicación.
- Guardado y consulta de reportes.
- Lista de avisos con fecha de carga.
- Marcadores e información en el mapa.
- Conservación de reportes al reiniciar el frontend.

Quedaron pendientes los filtros, las fotografías,
las notificaciones al celular, la búsqueda por zona,
el estado de resolución y el cálculo de rutas.

El alcance final es menor que el backlog original.
Las funciones pendientes se reservan para futuras versiones.

## Pruebas realizadas por Milena

Se instaló y ejecutó el proyecto en otra computadora.
Se comprobó la consulta de reportes, la creación de
PRUEBA Milena 01 y su visualización en lista y mapa.

También se verificaron la selección obligatoria de una ubicación, las validaciones del formulario y la conservación del reporte después de detener y reiniciar el frontend.

Las pruebas iniciales de Milena incluían validaciones de referencia obligatoria y longitud mínima. Posteriormente, el formulario fue actualizado para permitir una referencia adicional opcional, con un máximo de 150 caracteres.

Los resultados detallados están registrados en pruebas.md.

## Conclusiones

La integración del proyecto permitió observar cómo
los datos ingresados en un formulario se guardan
y luego se recuperan para mostrarlos en distintas vistas.

Las pruebas ayudaron a comprobar el recorrido principal
y las validaciones. También permitieron distinguir
las funciones terminadas de las que siguen pendientes.

Si comenzáramos nuevamente, integraríamos antes un recorrido
mínimo de guardado y consulta, y registraríamos las pruebas
y capturas a medida que avanzamos.

Como mejoras futuras proponemos completar las funciones
pendientes e incorporar un mecanismo para comprobar
si los reportes siguen vigentes.