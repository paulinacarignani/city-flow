import { obtenerClienteSupabase } from '../lib/supabase';

// Consulta los reportes del más reciente al más antiguo.
export async function obtenerIncidentes() {
  const supabase = obtenerClienteSupabase();

  const { data, error } = await supabase
    .from('incidentes')
    .select('*')
    .order('creado_en', { ascending: false })
    .order('id', { ascending: false });

  if (error) {
    throw new Error('No se pudieron consultar los reportes.', {
      cause: error,
    });
  }

  return data;
}

// Guarda un reporte y devuelve el registro creado.
export async function crearIncidente(datos) {
  const supabase = obtenerClienteSupabase();

  const nuevoIncidente = {
    tipo: datos.tipo,
    referencia: datos.referencia.trim(),
    descripcion: datos.descripcion?.trim() || null,
    latitud: datos.latitud,
    longitud: datos.longitud,
  };

  const { data, error } = await supabase
    .from('incidentes')
    .insert(nuevoIncidente)
    .select()
    .single();

  if (error) {
    throw new Error(
      'No se pudo guardar el reporte. Revisá los datos y reintentá.',
      { cause: error }
    );
  }

  return data;
}