
import { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function DetectarClick({ onSelectLocation }) {
  useMapEvents({
    click(e) {
      onSelectLocation({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      })
    },
  })

  return null
}

function LocationSelector({ onSelectLocation = () => { } }) {
  const centro = [-26.8241, -65.2226]
  const [ubicacion, setUbicacion] = useState(null)

  function seleccionarUbicacion(nuevaUbicacion) {
    setUbicacion(nuevaUbicacion)
    onSelectLocation(nuevaUbicacion)
  }

  return (
    <div>
      <h3>Seleccionar ubicación del incidente</h3>

      <p>
        Hacé clic en el mapa para indicar dónde
        ocurrió el incidente.
      </p>

      <MapContainer
        center={centro}
        zoom={13}
        style={{ height: '350px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <DetectarClick
          onSelectLocation={seleccionarUbicacion}
        />

        {ubicacion && (
          <Marker position={[ubicacion.lat, ubicacion.lng]}>
            <Popup>Ubicación seleccionada</Popup>
          </Marker>
        )}
      </MapContainer>

      {ubicacion && (
        <p>
          <strong>Ubicación seleccionada:</strong>
          <br />
          Latitud: {ubicacion.lat.toFixed(6)}
          <br />
          Longitud: {ubicacion.lng.toFixed(6)}
        </p>
      )}
    </div>
  )
}

export default LocationSelector
