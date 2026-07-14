// ═══════════════════════════════════════════════════════════════
// MUV VITAL — Constants
// Toda la data del sitio. Cero strings hardcodeados en componentes.
// ═══════════════════════════════════════════════════════════════

export const MARCA = {
  nombre: "MUV Vital",
  claim: "Club privado de salud y rendimiento",
  ciudad: "Roquetas de Mar",
  provincia: "Almería",
  dominio: "https://muvvital.com",
  telefono: "680 63 10 98",
  whatsapp: "680 63 10 98",
  email: "«PENDIENTE:email-contacto»",
  direccion: "Avenida Reino de España, 78, 04740",
  horario: "«PENDIENTE:horario»",
} as const;

export const NAV_LINKS = [
  { id: "metodo", titulo: "El método" },
  { id: "pilares", titulo: "Pilares" },
  { id: "unidades", titulo: "Unidades" },
  { id: "espacio", titulo: "El espacio" },
  { id: "equipo", titulo: "Equipo" },
] as const;

// ───────────────────────────────────────────────────────────────
// HERO — Acto 1
// ───────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "MUV VITAL · CLUB PRIVADO DE SALUD Y RENDIMIENTO · ROQUETAS DE MAR",
  titulo: "Movimiento con criterio médico.",
  subtitulo:
    "Entrenamiento personal, traumatología, fisioterapia, nutrición y podología. " +
    "Un solo equipo, un solo método, un solo lugar.",
  ctaPrimario: "Solicitar una evaluación privada",
  ctaSecundario: "Conocer el método",
} as const;

// ───────────────────────────────────────────────────────────────
// MANIFIESTO — Acto 2a
// ───────────────────────────────────────────────────────────────

export const MANIFIESTO = [
  "No somos un gimnasio con servicios añadidos.",
  "Somos una unidad de salud con un club excepcional.",
  "Cinco especialidades. Un método. Tu cuerpo.",
] as const;

// ───────────────────────────────────────────────────────────────
// MÉTODO — Acto 2b (bucle de 4 fases)
// ───────────────────────────────────────────────────────────────

export interface FaseMetodo {
  numero: "01" | "02" | "03" | "04";
  nombre: string;
  descripcion: string;
}

export const METODO: FaseMetodo[] = [
  {
    numero: "01",
    nombre: "EVALÚA",
    descripcion:
      "Historia clínica, composición corporal, movilidad, fuerza y pisada. " +
      "60–90 minutos con el equipo. Sales sabiendo tu punto de partida exacto.",
  },
  {
    numero: "02",
    nombre: "PERSONALIZA",
    descripcion:
      "Tu plan lo firma un equipo completo: médico, fisioterapeuta, nutricionista, " +
      "podólogo y entrenador deciden juntos qué haces y qué no.",
  },
  {
    numero: "03",
    nombre: "EJECUTA",
    descripcion:
      "Entrenas con supervisión real en un espacio pensado para pocos. " +
      "Cada sesión queda registrada.",
  },
  {
    numero: "04",
    nombre: "MIDE",
    descripcion:
      "Reevaluación periódica. Lo que mejora se ve en datos; lo que no, se corrige. " +
      "Y el bucle vuelve a empezar.",
  },
] as const;

export const METODO_CIERRE = "El plan no es un papel. Es un circuito." as const;

// ───────────────────────────────────────────────────────────────
// PILARES — Acto 3
// ───────────────────────────────────────────────────────────────

export interface Pilar {
  id: "rinde" | "repara" | "nutre" | "pertenece";
  nombre: string;
  claim: string;
  unidades: string[];
  span: "ancho" | "normal";
}

export const PILARES: Pilar[] = [
  {
    id: "rinde",
    nombre: "RINDE",
    claim: "Fuerza, movilidad y capacidad aeróbica con programación individual, sesión a sesión.",
    unidades: ["Entrenamiento personalizado"],
    span: "ancho",
  },
  {
    id: "repara",
    nombre: "REPARA",
    claim: "Diagnóstico, tratamiento y readaptación sin salir del club. Tu lesión deja de ir de consulta en consulta.",
    unidades: ["Medicina traumatológica", "Fisioterapia", "Podología"],
    span: "normal",
  },
  {
    id: "nutre",
    nombre: "NUTRE",
    claim: "Composición corporal y energía con un plan que puedes sostener. Comer bien no es un castigo.",
    unidades: ["Nutrición"],
    span: "normal",
  },
  {
    id: "pertenece",
    nombre: "PERTENECE",
    claim: "Un entorno curado: aforo cuidado, trato por tu nombre y gente que viene a lo mismo que tú.",
    unidades: ["Club y comunidad"],
    span: "normal",
  },
] as const;

// ───────────────────────────────────────────────────────────────
// UNIDADES — Acto 4a (5 unidades de servicio)
// ───────────────────────────────────────────────────────────────

export interface Unidad {
  numero: string;
  id: string;
  nombre: string;
  pilar: Pilar["id"];
  claim: string;
  incluye: string[];
  esSanitaria: boolean;
}

export const UNIDADES: Unidad[] = [
  {
    numero: "01",
    id: "entrenamiento",
    nombre: "Entrenamiento personalizado",
    pilar: "rinde",
    claim:
      "Programas individuales de fuerza, movilidad y capacidad aeróbica, diseñados a partir de tu evaluación y supervisados en sala por tu entrenador. Sin rutinas fotocopiadas: tu programación cambia cuando tus datos cambian.",
    incluye: [
      "Valoración funcional inicial",
      "Programación mensual individual",
      "Sesiones 1:1 o en grupo reducido «PENDIENTE:ratio-sesiones»",
      "Coordinación directa con la unidad clínica",
    ],
    esSanitaria: false,
  },
  {
    numero: "02",
    id: "traumatologia",
    nombre: "Medicina traumatológica",
    pilar: "repara",
    claim:
      "Consulta de traumatología dentro del club. Diagnóstico de lesiones, seguimiento de patología articular y criterio médico sobre tu plan de entrenamiento: qué puedes cargar, cuándo y cuánto.",
    incluye: [
      "Consulta diagnóstica",
      "Pruebas y derivación cuando procede «PENDIENTE:pruebas-diagnósticas-disponibles»",
      "Autorización y ajuste médico del plan",
      "Informes para tu historia clínica",
    ],
    esSanitaria: true,
  },
  {
    numero: "03",
    id: "fisioterapia",
    nombre: "Fisioterapia",
    pilar: "repara",
    claim:
      "Tratamiento y readaptación en el mismo lugar donde entrenas. El fisioterapeuta que te trata habla cada semana con el entrenador que te programa. La recuperación no termina en la camilla: termina cuando vuelves a moverte con confianza.",
    incluye: [
      "Fisioterapia de lesión y de descarga",
      "Readaptación deportiva",
      "Trabajo preventivo integrado en tu programa",
    ],
    esSanitaria: true,
  },
  {
    numero: "04",
    id: "nutricion",
    nombre: "Nutrición",
    pilar: "nutre",
    claim:
      "Plan de alimentación construido sobre tu composición corporal, tu agenda real y tus objetivos: rendimiento, pérdida de grasa, ganancia muscular o salud metabólica. Con seguimiento, no con un PDF y suerte.",
    incluye: [
      "Estudio de composición corporal «PENDIENTE:método-antropometría»",
      "Plan personalizado",
      "Revisiones periódicas",
      "Coordinación con médico y entrenador",
    ],
    esSanitaria: false,
  },
  {
    numero: "05",
    id: "podologia",
    nombre: "Podología",
    pilar: "repara",
    claim:
      "Tu pisada afecta a cada sentadilla, cada zancada y cada dolor de rodilla o espalda que llevas años arrastrando. Estudio de la marcha, tratamiento y plantillas personalizadas si las necesitas — decidido junto al resto de tu equipo.",
    incluye: [
      "Estudio biomecánico de la pisada",
      "Quiropodia y tratamientos podológicos",
      "Plantillas personalizadas «PENDIENTE:confirmar-plantillas»",
      "Revisión con entrenador y fisio",
    ],
    esSanitaria: true,
  },
] as const;

// ───────────────────────────────────────────────────────────────
// ESPACIO — Acto 4b (galería arquitectónica)
// ───────────────────────────────────────────────────────────────

export const ESPACIO_IMAGENES = [
  { id: "sala-fuerza", titulo: "Sala de fuerza", img: "images/fuerza.webp" },
  { id: "recuperacion", titulo: "Recuperación y fisioterapia", img: "images/recuperacion.webp" },
  { id: "zona-evaluacion", titulo: "Zona de evaluación y rendimiento", img: "images/evaluacion.webp" },
  { id: "entrenamiento-personal", titulo: "Entrenamiento personal", img: "images/entrenamiento.webp" },
  { id: "instalaciones", titulo: "Instalaciones", img: "images/instalaciones.webp" },
] as const;

// ───────────────────────────────────────────────────────────────
// EQUIPO — Acto 4c
// ───────────────────────────────────────────────────────────────

export const EQUIPO_FRASE =
  "Las decisiones sobre tu cuerpo las toma gente colegiada para tomarlas." as const;

export interface Profesional {
  nombre: string;
  rol: string;
  titulacion: string;
  colegiado: string;
  orden: number;
}

export const EQUIPO: Profesional[] = [
  {
    nombre: "«PENDIENTE:dr-traumatologia»",
    rol: "Traumatología",
    titulacion: "«PENDIENTE:titulación»",
    colegiado: "«PENDIENTE:nº-colegiado»",
    orden: 1,
  },
  {
    nombre: "«PENDIENTE:fisioterapeuta»",
    rol: "Fisioterapia",
    titulacion: "«PENDIENTE:titulación»",
    colegiado: "«PENDIENTE:nº-colegiado»",
    orden: 2,
  },
  {
    nombre: "«PENDIENTE:nutricionista»",
    rol: "Nutrición",
    titulacion: "«PENDIENTE:titulación»",
    colegiado: "«PENDIENTE:nº-colegiado»",
    orden: 3,
  },
  {
    nombre: "«PENDIENTE:podologo»",
    rol: "Podología",
    titulacion: "«PENDIENTE:titulación»",
    colegiado: "«PENDIENTE:nº-colegiado»",
    orden: 4,
  },
  {
    nombre: "«PENDIENTE:entrenador-1»",
    rol: "Entrenamiento personal",
    titulacion: "«PENDIENTE:titulación»",
    colegiado: "",
    orden: 5,
  },
  {
    nombre: "«PENDIENTE:entrenador-2»",
    rol: "Entrenamiento personal",
    titulacion: "«PENDIENTE:titulación»",
    colegiado: "",
    orden: 6,
  },
] as const;

// ───────────────────────────────────────────────────────────────
// PRUEBA — Acto 5a (cifras + tecnología)
// ───────────────────────────────────────────────────────────────

export interface CifraPrueba {
  valor: number;
  sufijo: string;
  label: string;
  confirmada: boolean;
}

export const CIFRAS: CifraPrueba[] = [
  { valor: 0, sufijo: "m²", label: "de instalaciones", confirmada: false },
  { valor: 0, sufijo: "", label: "profesionales", confirmada: false },
  { valor: 0, sufijo: "", label: "socios máx.", confirmada: false },
] as const;

export const PRUEBA_TITULO = "Medimos para decidir" as const;
export const PRUEBA_SUBTITULO = "Tecnología" as const;

// ───────────────────────────────────────────────────────────────
// ACCESO — Acto 5b (formulario de evaluación)
// ───────────────────────────────────────────────────────────────

export const ACCESO = {
  subtitulo: "ACCESO",
  titulo: "Empezar aquí no es apuntarse. Es evaluarse.",
  intro:
    "Trabajamos con un número limitado de socios para mantener la atención que ofrecemos. El primer paso es una evaluación privada con el equipo.",
  aforo: "Aforo de socios limitado a «PENDIENTE:nº» personas.",
} as const;

export const PASOS_ACCESO = [
  {
    numero: "01",
    nombre: "Solicita",
    descripcion: "Envía el formulario. Te llamamos en menos de 24 h laborables.",
  },
  {
    numero: "02",
    nombre: "Evalúate",
    descripcion: "60–90 min con el equipo: historia, composición, movilidad y pisada.",
  },
  {
    numero: "03",
    nombre: "Decide",
    descripcion: "Te presentamos tu plan y las condiciones. Sin compromiso y sin letra pequeña.",
  },
] as const;

export const FORMULARIO = {
  titulo: "Solicitar una evaluación privada",
  campos: {
    nombre: { label: "Nombre y apellidos", placeholder: "Tu nombre completo", required: true },
    telefono: { label: "Teléfono", placeholder: "600 000 000", required: true },
    email: { label: "Email", placeholder: "tu@email.com", required: true },
    objetivo: {
      label: "Objetivo principal",
      required: true,
      opciones: [
        { value: "", label: "Selecciona una opción" },
        { value: "dolor", label: "Dolor o lesión" },
        { value: "rendimiento", label: "Rendimiento y composición corporal" },
        { value: "salud", label: "Salud y longevidad" },
        { value: "no-claro", label: "Aún no lo tengo claro" },
      ],
    },
    horario: {
      label: "Franja horaria preferida",
      required: false,
      opciones: [
        { value: "", label: "Selecciona una opción" },
        { value: "manana", label: "Mañana" },
        { value: "mediodia", label: "Mediodía" },
        { value: "tarde", label: "Tarde" },
      ],
    },
    mensaje: { label: "Mensaje (opcional)", placeholder: "Cuéntanos algo sobre ti...", required: false },
  },
  rgpd: "He leído y acepto la política de privacidad. Mis datos serán tratados por MUV Vital para gestionar mi solicitud de evaluación.",
  boton: "Enviar solicitud",
  enviando: "Enviando…",
  exito: "Recibido. Te llamamos en menos de 24 h laborables para proponerte fecha y hora.",
  error: "No se ha podido enviar. Llámanos o escríbenos por WhatsApp: 680 63 10 98.",
} as const;

// ───────────────────────────────────────────────────────────────
// FOOTER
// ───────────────────────────────────────────────────────────────

export const FOOTER = {
  claim: "MUV Vital — Club privado de salud y rendimiento. Roquetas de Mar, Almería.",
  avisoSanitario:
    "Los servicios sanitarios de MUV Vital (medicina, fisioterapia, nutrición y podología) se prestan por profesionales colegiados. «PENDIENTE:nº-registro-sanitario-centro»",
  avisoIA:
    "Esta página web ha sido editada, incluyendo parte de su contenido e imágenes, con ayuda de inteligencia artificial.",
  linksLegales: [
    { titulo: "Aviso legal", href: "/legal/aviso-legal" },
    { titulo: "Privacidad", href: "/legal/privacidad" },
    { titulo: "Cookies", href: "/legal/cookies" },
  ],
} as const;

// ───────────────────────────────────────────────────────────────
// FLAGS Y DATOS PENDIENTES
// ───────────────────────────────────────────────────────────────

export const SHOW_TESTIMONIOS = false;

export const DATOS_PENDIENTES: string[] = [
  "email-contacto",
  "horario",
  "nº-registro-sanitario-centro",
  "endpoint-o-email-destino",
  "foto-hero",
  "m²-instalaciones",
  "nº-profesionales",
  "nº-socios-máx",
  "pruebas-diagnósticas-disponibles",
  "método-antropometría",
  "confirmar-plantillas",
  "ratio-sesiones",
  "frecuencia-reevaluación",
  "nº-aforo-socios",
  "analítica",
  "perfiles-rrss",
  "dr-traumatologia",
  "fisioterapeuta",
  "nutricionista",
  "podologo",
  "entrenador-1",
  "entrenador-2",
];

// ═══════════════════════════════════════════════════════════════
// END OF constants/index.ts
// ═══════════════════════════════════════════════════════════════
