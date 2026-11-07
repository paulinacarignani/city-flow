import { useEffect, useRef } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import { obtenerDireccion } from '../services/direccion.js'
import 'leaflet/dist/leaflet.css'

function DetectarClick({ onSelectLocation, disabled }) {
  useMapEvents({
    click(event) {
      if (disabled) return

      onSelectLocation({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      })
    },
  })

  return null
}

function LocationSelector({
  ubicacion,
  onSelectLocation,
  disabled = false,
}) {
  const centro = [-26.8241, -65.2226]
  const ultimaSeleccion = useRef(0)

  useEffect(() => {
    return () => {
      ultimaSeleccion.current += 1
    }
  }, [])

  async function seleccionarUbicacion(coordenadas) {
    const numeroSeleccion = ++ultimaSeleccion.current

    onSelectLocation({
      ...coordenadas,
      direccion: null,
      buscando: true,
      errorDireccion: '',
    })

    try {
      const direccion = await obtenerDireccion(
        coordenadas.lat,
        coordenadas.lng
      )

      // Si se eligió otro punto, ignoramos el resultado anterior.
      if (numeroSeleccion !== ultimaSeleccion.current) return

      onSelectLocation({
        ...coordenadas,
        direccion,
        buscando: false,
        errorDireccion: '',
      })
    } catch {
      if (numeroSeleccion !== ultimaSeleccion.current) return

      onSelectLocation({
        ...coordenadas,
        direccion: null,
        buscando: false,
        errorDireccion:
          'No se pudo obtener la dirección. Podés elegir otro punto o guardar con las coordenadas.',
      })
    }
  }

  return (
    <div>
      <h3>Seleccionar ubicación del incidente</h3>

      <p>
        Hacé clic en el mapa para indicar dónde ocurrió el incidente.
      </p>

      <MapContainer
        center={centro}
        zoom={13}
        style={{ height: '350px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <DetectarClick
          onSelectLocation={seleccionarUbicacion}
          disabled={disabled}
        />

        {ubicacion && (
          <Marker position={[ubicacion.lat, ubicacion.lng]}>
            <Popup>
              {ubicacion.direccion || 'Ubicación seleccionada'}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {ubicacion && (
        <div role="status" aria-live="polite">
          <p>
            <strong>Ubicación seleccionada:</strong>
            <br />
            {ubicacion.buscando
              ? 'Buscando dirección…'
              : ubicacion.direccion || ubicacion.errorDireccion}
          </p>

          <small>
            Latitud: {ubicacion.lat.toFixed(6)}
            {' · '}
            Longitud: {ubicacion.lng.toFixed(6)}
          </small>
        </div>
      )}

      <p>
        <small>
          Dirección aproximada obtenida mediante Nominatim.
          Datos de{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
          >
            © OpenStreetMap contributors
          </a>.
        </small>
      </p>
    </div>
  )
}

export default LocationSelector