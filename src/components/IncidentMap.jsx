
import { useState } from 'react'
import {
  MapContainer, TileLayer, CircleMarker, Popup, Marker, useMapEvents
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

function IncidentMap({ incidentes = [] }) {
  const centro = [-26.8241, -65.2226]

  const [ubicacionSeleccionada, setUbicacionSeleccionada] =
    useState(null)

  function obtenerColor(tipo) {
    switch (tipo?.toLowerCase()) {
      case 'accidente':
        return 'red'
      case 'corte':
        return 'orange'
      case 'inundacion':
        return 'blue'
      default:
        return 'gray'
    }
  }

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

        {incidentes.map((incidente) => {
          const lat = Number(incidente.latitud)
          const lng = Number(incidente.longitud)
          const color = obtenerColor(incidente.tipo)

          if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            return null
          }

          return (
            <CircleMarker
              key={incidente.id}
              center={[lat, lng]}
              radius={10}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.8
              }}
            >
              <Popup>
                <strong>{incidente.tipo}</strong>
                <p>{incidente.referencia}</p>
                {incidente.descripcion && (
                  <p>{incidente.descripcion}</p>
                )}
              </Popup>
            </CircleMarker>
          )
        })}

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