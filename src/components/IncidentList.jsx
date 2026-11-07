
function IncidentList({ incidentes = [], cargando = false, error = '' }) {
  return (
    <section id="avisos">
      <h2>Últimos avisos</h2>

      {cargando && <p>Cargando reportes...</p>}

      {error && <p role="alert">{error}</p>}

      {!cargando && !error && incidentes.length === 0 && (
        <p>Todavía no hay reportes registrados.</p>
      )}

      {!cargando && incidentes.length > 0 && (
        <ul>
          {incidentes.map((incidente) => (
            <li key={incidente.id}>
              <strong>
                {incidente.tipo.charAt(0).toUpperCase() +
                  incidente.tipo.slice(1)}
              </strong>

              <p>
              <strong>Ubicación:</strong>{' '}
              {incidente.direccion || 'Dirección no registrada'}
              </p>

              {incidente.referencia && (
              <p>
              <strong>Referencia adicional:</strong>{' '}
             {incidente.referencia}
             </p>
             )}

              {incidente.descripcion && (
                <p>{incidente.descripcion}</p>
              )}

              <small>
                {new Date(incidente.creado_en).toLocaleString('es-AR')}
              </small>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default IncidentList
