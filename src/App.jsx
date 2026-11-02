import './App.css'
import IncidentMap from './components/IncidentMap.jsx'
import IncidentList from './components/IncidentList.jsx'
import IncidentForm from './components/IncidentForm.jsx'

function App() {
  return (
    <main>
      <h1>City Flow</h1>
      <p>Información de tu ciudad, compartida entre todos.</p>

      <nav aria-label="Navegación principal">
        <a href="#mapa">Mapa</a>
        <a href="#avisos">Avisos</a>
        <a href="#reportar">Reportar un incidente</a>
      </nav>

      <IncidentMap />

      <IncidentList />

      <IncidentForm />
    </main>
  )
}

export default App