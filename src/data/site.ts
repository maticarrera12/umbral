const photo = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export { photo };

export const nav = [
  { id: 'proyectos', label: 'Proyectos', also: ['indice'] },
  { id: 'enfoque', label: 'Enfoque', also: ['proceso'] },
  { id: 'estudio', label: 'Estudio', also: ['equipo'] },
  { id: 'prensa', label: 'Prensa', also: [] as string[] },
  { id: 'contacto', label: 'Contacto', also: [] as string[] },
];

export const footLinks = [
  ['proyectos', 'Proyectos'],
  ['indice', 'Índice de obras'],
  ['enfoque', 'Enfoque'],
  ['proceso', 'Proceso'],
  ['estudio', 'Estudio'],
  ['equipo', 'Equipo'],
  ['prensa', 'Prensa'],
] as const;

export const works = [
  { name: 'Casa del Patio', place: 'Belgrano, Buenos Aires', type: 'Obra nueva', year: '2023', img: 'photo-1752756571877-d3b3b980edfa' },
  { name: 'Casa Umbral', place: 'Mar Azul, Buenos Aires', type: 'Obra nueva', year: '2025', img: 'photo-1781795290283-893dd050eeb3' },
  { name: 'Pabellón del Lago', place: 'Villa La Angostura, Neuquén', type: 'En curso', year: '2026', img: 'photo-1516099624722-bbd32783b402' },
  { name: 'Casa de la Ladera', place: 'Valle de Punilla, Córdoba', type: 'Obra nueva', year: '2024', img: 'photo-1595418954089-3341605673d6' },
  { name: 'Casa Negra', place: 'José Ignacio, Uruguay', type: 'En curso', year: '2026', img: 'photo-1595769557174-77c5002cff45' },
  { name: 'Casa Medianera', place: 'Colegiales, Buenos Aires', type: 'Reforma', year: '2022', img: 'photo-1592276040264-e10344a6a10e' },
  { name: 'Casa de los Pinos', place: 'Cariló, Buenos Aires', type: 'Obra nueva', year: '2021', img: 'photo-1543071293-d91175a68672' },
  { name: 'Departamento Libertador', place: 'Palermo Chico, Buenos Aires', type: 'Reforma', year: '2021', img: 'photo-1609081144289-eacc3108cd03' },
  { name: 'Casa Blanca', place: 'San Isidro, Buenos Aires', type: 'Reforma', year: '2020', img: 'photo-1619419131379-a2c967821c19' },
  { name: 'Casa Patio Sur', place: 'Chacras de Coria, Mendoza', type: 'Obra nueva', year: '2019', img: 'photo-1598257212525-34d72ccf27c3' },
];

export const filters = ['Todas', 'Obra nueva', 'Reforma', 'En curso'];

export const team = [
  { name: 'Lucía Arregui', role: 'Socia fundadora · Arquitecta', bio: 'FADU-UBA y ETSAM Madrid. Dirige el proyecto y la relación con cada familia desde la primera visita.' },
  { name: 'Martín Solís', role: 'Socio fundador · Arquitecto', bio: 'Quince años en obra antes de fundar el estudio. Responsable de los detalles constructivos y la dirección técnica.' },
  { name: 'Inés Varela', role: 'Interiorismo y materiales', bio: 'Define la paleta de materiales, el mobiliario fijo y la luz artificial de cada casa.' },
];

export const press = [
  { year: '2025', outlet: 'Revista Summa+', title: 'Casa Umbral: una galería entre los médanos' },
  { year: '2025', outlet: 'Bienal de Arquitectura de Buenos Aires', title: 'Mención, categoría vivienda unifamiliar' },
  { year: '2024', outlet: 'Plataforma Arquitectura', title: 'Casa de la Ladera, piedra de la propia excavación' },
  { year: '2023', outlet: 'Suplemento ARQ', title: 'Diez estudios jóvenes de la arquitectura argentina' },
];
