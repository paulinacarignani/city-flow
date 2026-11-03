import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

let cliente;

export function obtenerClienteSupabase() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Falta configurar la URL y la clave publicable de Supabase.'
    );
  }

  if (!cliente) {
    cliente = createClient(supabaseUrl, supabaseKey);
  }

  return cliente;
}