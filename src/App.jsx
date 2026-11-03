
import { useEffect, useState } from 'react'
import './App.css'
import IncidentMap from './components/IncidentMap.jsx'
import IncidentList from './components/IncidentList.jsx'
import IncidentForm from './components/IncidentForm.jsx'
import { obtenerIncidentes } from './services/incidentes.js'

function App() {
  const [incidentes, setIncidentes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  async function cargarIncidentes() {
    try {
      setError('')
      const datos = await obtenerIncidentes()
      setIncidentes(datos)
    } catch (err) {
      setError(err.message || 'No se pudieron cargar los reportes.')
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    cargarIncidentes()
  }, [])

  return (
    <main>
      <h1>City Flow</h1>
      <p>Información de tu ciudad, compartida entre todos.</p>

      <nav aria-label="Navegación principal">
        <a href="#mapa">Mapa</a>
        <a href="#avisos">Avisos</a>
        <a href="#reportar">Reportar un incidente</a>
      </nav>

      <IncidentMap incidentes={incidentes} />

      <IncidentList
        incidentes={incidentes}
        cargando={cargando}
        error={error}
      />

      <IncidentForm onReporteCreado={cargarIncidentes} />
    </main>
  )
}

export default App
