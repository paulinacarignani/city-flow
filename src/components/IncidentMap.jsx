
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function IncidentMap({ incidentes = [] }) {
  const centro = [-26.8241, -65.2226]

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

          if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            return null
          }

          const color = obtenerColor(incidente.tipo)

          return (
            <CircleMarker
              key={incidente.id}
              center={[lat, lng]}
              radius={10}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: 0.8,
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
      </MapContainer>

      <p>
        Incidentes registrados: {incidentes.length}
      </p>
    </section>
  )
}

export default IncidentMap
