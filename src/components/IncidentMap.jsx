
import { useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, Marker, useMapEvents
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function SeleccionarUbicacion({ alSeleccionar }) {
  useMapEvents({
    click(e) {
      alSeleccionar({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      })
    }
  })

  return null
}

function IncidentMap() {
  const centro = [-26.8241, -65.2226]

  const [ubicacionSeleccionada, setUbicacionSeleccionada] =
    useState(null)

  const incidentes = [
    {
      id: 1,
      tipo: 'Accidente',
      descripcion: 'Accidente de tránsito',
      posicion: [-26.8241, -65.2226],
      color: 'red'
    },
    {
      id: 2,
      tipo: 'Corte de calle',
      descripcion: 'Calle cortada por obras',
      posicion: [-26.8300, -65.2150],
      color: 'orange'
    },
    {
      id: 3,
      tipo: 'Inundación',
      descripcion: 'Acumulación de agua',
      posicion: [-26.8180, -65.2300],
      color: 'blue'
    }
  ]

  return (
    <section id="mapa">
      <h2>Mapa de incidentes</h2>

      <p>
        Consultá los cortes, accidentes e inundaciones
        de San Miguel de Tucumán.
      </p>

      <MapContainer
        center={centro}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {incidentes.map((incidente) => (
          <CircleMarker
            key={incidente.id}
            center={incidente.posicion}
            radius={10}
            pathOptions={{
              color: incidente.color,
              fillColor: incidente.color,
              fillOpacity: 0.8
            }}
          >
            <Popup>
              <strong>{incidente.tipo}</strong>
              <p>{incidente.descripcion}</p>
            </Popup>
          </CircleMarker>
        ))}

        <SeleccionarUbicacion
          alSeleccionar={setUbicacionSeleccionada}
        />

        {ubicacionSeleccionada && (
          <Marker
            position={[
              ubicacionSeleccionada.lat,
              ubicacionSeleccionada.lng
            ]}
          >
            <Popup>
              Ubicación seleccionada para reportar
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {ubicacionSeleccionada && (
        <p>
          <strong>Ubicación seleccionada:</strong>
          {' '}Latitud: {ubicacionSeleccionada.lat.toFixed(6)}
          {' '}| Longitud: {ubicacionSeleccionada.lng.toFixed(6)}
        </p>
      )}
    </section>
  )
}

export default IncidentMap