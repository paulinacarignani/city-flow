begin;

-- Agrega el lugar donde guardaremos la dirección.
-- Los reportes anteriores conservarán sus datos.
alter table public.incidentes
  add column if not exists direccion text;

-- Permite que la referencia adicional quede vacía.
alter table public.incidentes
  alter column referencia drop not null;

-- Reemplaza la regla anterior de 3 a 150 caracteres.
alter table public.incidentes
  drop constraint if exists incidentes_referencia_check;

-- La referencia es opcional, con un máximo de 150 caracteres.
alter table public.incidentes
  add constraint incidentes_referencia_check
  check (
    referencia is null
    or char_length(trim(referencia)) <= 150
  );

commit;