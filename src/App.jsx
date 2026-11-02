import './App.css'

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

      <section id="mapa">
        <h2>Mapa de incidentes</h2>
        <p>Aquí vamos a mostrar los cortes, accidentes e inundaciones.</p>
      </section>

      <section id="avisos">
        <h2>Últimos avisos</h2>
        <p>Aquí aparecerán los reportes ciudadanos.</p>
      </section>

      <section id="reportar">
        <h2>Reportar un incidente</h2>
        <p>Aquí vamos a incorporar el formulario de reportes.</p>
      </section>
    </main>
  )
}

export default App