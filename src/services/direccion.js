// Guarda resultados ya consultados durante esta sesión.
const cache = new Map()

// Organiza las consultas para ejecutarlas de a una.
let cola = Promise.resolve()
let ultimaConsulta = 0

const esperar = (tiempo) =>
  new Promise((resolve) => setTimeout(resolve, tiempo))

export function obtenerDireccion(lat, lng) {
  const clave = `${lat.toFixed(6)},${lng.toFixed(6)}`

  const consulta = cola.then(async () => {
    if (cache.has(clave)) {
      return cache.get(clave)
    }

    // Deja al menos 1,1 segundos entre consultas.
    const demora = Math.max(
      0,
      1100 - (Date.now() - ultimaConsulta)
    )

    await esperar(demora)

    const parametros = new URLSearchParams({
      format: 'jsonv2',
      lat: String(lat),
      lon: String(lng),
      'accept-language': 'es',
    })

    const controlador = new AbortController()
    const tiempoLimite = setTimeout(
      () => controlador.abort(),
      10000
    )

    try {
      ultimaConsulta = Date.now()

      const respuesta = await fetch(
        `https://nominatim.openstreetmap.org/reverse?${parametros}`,
        { signal: controlador.signal }
      )

      if (!respuesta.ok) {
        throw new Error('No se pudo consultar la dirección.')
      }

      const datos = await respuesta.json()

      if (datos.error || !datos.display_name) {
        throw new Error(
          'No se encontró una dirección para este punto.'
        )
      }

      const direccion = datos.display_name
      cache.set(clave, direccion)

      return direccion
    } finally {
      clearTimeout(tiempoLimite)
    }
  })

  // Un error no impide realizar las siguientes consultas.
  cola = consulta.catch(() => {})

  return consulta
}