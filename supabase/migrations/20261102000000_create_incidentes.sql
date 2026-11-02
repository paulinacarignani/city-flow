create table public.incidentes (
  id bigint generated always as identity primary key,
  tipo text not null
    check (tipo in ('corte', 'accidente', 'inundacion')),
  referencia text not null
    check (char_length(trim(referencia)) between 3 and 150),
  descripcion text
    check (descripcion is null or char_length(descripcion) <= 500),
  latitud double precision not null
    check (latitud between -90 and 90),
  longitud double precision not null
    check (longitud between -180 and 180),
  creado_en timestamptz not null default now()
);

alter table public.incidentes enable row level security;

create policy "Cualquiera puede consultar incidentes"
on public.incidentes
for select
to anon, authenticated
using (true);

create policy "Cualquiera puede crear incidentes"
on public.incidentes
for insert
to anon, authenticated
with check (true);

grant select, insert on public.incidentes to anon, authenticated;
