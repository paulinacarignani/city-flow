
import { useState } from 'react'
import LocationSelector from './LocationSelector.jsx'
import { crearIncidente } from '../services/incidentes.js'

function IncidentForm({ onReporteCreado }) {
  const [tipo, setTipo] = useState('corte')
  const [referencia, setReferencia] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [ubicacion, setUbicacion] = useState(null)
  const [guardando, setGuardando] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState(false)

  async function manejarEnvio(event) {
    event.preventDefault()
    setMensaje('')
    setError(false)

    const referenciaLimpia = referencia.trim()

    if (
      referenciaLimpia.length < 3 ||
      referenciaLimpia.length > 150
    ) {
      setMensaje('La referencia debe tener entre 3 y 150 caracteres.')
      setError(true)
      return
    }

    if (descripcion.length > 500) {
      setMensaje('La descripción no puede superar los 500 caracteres.')
      setError(true)
      return
    }

    if (!ubicacion) {
      setMensaje('Seleccioná una ubicación en el mapa antes de enviar.')
      setError(true)
      return
    }

    setGuardando(true)

    try {
      await crearIncidente({
        tipo,
        referencia: referenciaLimpia,
        descripcion,
        latitud: ubicacion.lat,
        longitud: ubicacion.lng,
      })
      if (onReporteCreado) {
        await onReporteCreado()
      }

      setMensaje('¡Reporte guardado correctamente!')
      setTipo('corte')
      setReferencia('')
      setDescripcion('')
      setUbicacion(null)

    } catch (error) {
      setMensaje(
        error.message ||
        'No se pudo guardar el reporte. Intentá nuevamente.'
      )
      setError(true)

    } finally {
      setGuardando(false)
    }
  }

  return (
    <section id="reportar">
      <h2>Reportar un incidente</h2>

      <form onSubmit={manejarEnvio}>
        <label htmlFor="tipo">Tipo de incidente *</label>

        <select
          id="tipo"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
          required
        >
          <option value="corte">Corte</option>
          <option value="accidente">Accidente</option>
          <option value="inundacion">Inundación</option>
        </select>

        <label htmlFor="referencia">Referencia *</label>

        <input
          id="referencia"
          type="text"
          value={referencia}
          onChange={(event) => setReferencia(event.target.value)}
          minLength={3}
          maxLength={150}
          placeholder="Ej.: Corte de luz en la zona"
          required
        />

        <label htmlFor="descripcion">
          Descripción (opcional)
        </label>

        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          maxLength={500}
          placeholder="Agregá detalles del incidente..."
          rows={4}
        />

        <p>{descripcion.length}/500 caracteres</p>

        <LocationSelector onSelectLocation={setUbicacion} />

        {ubicacion && (
          <p role="status">
            Ubicación seleccionada correctamente.
          </p>
        )}

        {mensaje && (
          <p
            role="status"
            aria-live="polite"
            style={{ color: error ? 'red' : 'green' }}
          >
            {mensaje}
          </p>
        )}

        <button type="submit" disabled={guardando}>
          {guardando ? 'Guardando…' : 'Enviar reporte'}
        </button>
      </form>
    </section>
  )
}

export default IncidentForm
