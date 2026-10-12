import type { IconName } from "../components/ui/Icon";

export const navigation = [
  { label: "Características", href: "#caracteristicas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Para quién es", href: "#para-quien" },
  { label: "Por qué es gratis", href: "#por-que-gratis" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
] as const;

type ContentCard = {
  icon: IconName;
  title: string;
  description: string;
  detail: string;
};

// Contenido de la propuesta inicial. Validar las capacidades con cada versión de la app.
export const features: ContentCard[] = [
  {
    icon: "bolt",
    title: "Cobro ultra rápido",
    description:
      "Menos pasos entre elegir un producto y cerrar una venta. Una interfaz clara para que cada cobro fluya, incluso en las horas de mayor movimiento.",
    detail: "MENOS CLICS. MÁS VENTAS.",
  },
  {
    icon: "box",
    title: "Inventario en tiempo real",
    description:
      "Mantén tus productos organizados, consulta sus existencias y conoce lo que necesita reposición. Todo desde un mismo lugar.",
    detail: "TU CATÁLOGO, BAJO CONTROL",
  },
  {
    icon: "chart",
    title: "Reportes claros y honestos",
    description:
      "Conoce cómo va tu negocio sin perderte en hojas de cálculo. Consulta tus ventas y encuentra los productos que más se venden.",
    detail: "INFORMACIÓN PARA DECIDIR MEJOR",
  },
  {
    icon: "offline",
    title: "Tu negocio sigue en marcha",
    description:
      "Un punto de venta pensado para acompañar la operación diaria de tu comercio, con una experiencia directa y sin distracciones.",
    detail: "DISEÑADO PARA EL DÍA A DÍA",
  },
  {
    icon: "receipt",
    title: "Cada venta, bien registrada",
    description:
      "Lleva un registro ordenado de tus transacciones. Revisa lo que vendiste y mantén la información de tu negocio a la mano.",
    detail: "ORDEN EN CADA TRANSACCIÓN",
  },
  {
    icon: "phone",
    title: "Tu mostrador va contigo",
    description:
      "Convierte tu dispositivo Android en una herramienta de trabajo. Atiende desde tu tienda, un puesto móvil o donde esté tu próximo cliente.",
    detail: "HECHO PARA ANDROID",
  },
];

export const principles: ContentCard[] = [
  {
    icon: "noFees",
    title: "Cero suscripciones",
    description:
      "Sin cuotas mensuales ni comisiones sobre tus ventas. Tus ingresos son el resultado de tu trabajo y se quedan contigo.",
    detail: "",
  },
  {
    icon: "lock",
    title: "Tu negocio, tu información",
    description:
      "Un espacio para organizar tus productos y tus ventas. Tú mantienes el control de la información de tu comercio.",
    detail: "",
  },
  {
    icon: "phone",
    title: "Instalación directa APK",
    description:
      "Descarga Emprender e instálalo directamente en tu dispositivo Android. Sin depender de una tienda de aplicaciones.",
    detail: "",
  },
];

export const audiences: (ContentCard & { id: string })[] = [
  {
    id: "cafeterias",
    icon: "coffee",
    title: "Cafeterías y panaderías",
    description:
      "Del primer café al último pedido. Organiza tu catálogo y agiliza el cobro cuando tu barra está a tope.",
    detail: "Cafeterías, panaderías, reposterías",
  },
  {
    id: "boutiques",
    icon: "shirt",
    title: "Boutiques y ropa",
    description:
      "Dale orden a tus colecciones y encuentra cada producto fácilmente. Más tiempo para atender, menos para buscar.",
    detail: "Moda, calzado, accesorios",
  },
  {
    id: "abarrotes",
    icon: "store",
    title: "Abarrotes y bazares",
    description:
      "Todos tus productos en un solo lugar. Lleva las ventas y el inventario de tu tienda sin complicaciones.",
    detail: "Minimercados, bazares, papelerías",
  },
  {
    id: "servicios",
    icon: "scissors",
    title: "Servicios y barberías",
    description:
      "Organiza tus servicios y productos de cuidado personal. Lleva un registro claro de cada venta de tu negocio.",
    detail: "Barberías, salones, estudios",
  },
];

export const installationSteps = [
  {
    number: "01",
    title: "Descarga la app",
    description:
      "Obtén el archivo APK de Emprender desde esta página en tu dispositivo Android.",
  },
  {
    number: "02",
    title: "Instala en tu Android",
    description:
      "Abre el archivo y, si Android lo solicita, autoriza a tu navegador para instalar esta aplicación.",
  },
  {
    number: "03",
    title: "Prepara tu negocio",
    description:
      "Abre Emprender, organiza tus productos y empieza a llevar tus ventas de forma más sencilla.",
  },
];

export const faqs = [
  {
    question: "¿Realmente no cobran nada por el servicio?",
    answer:
      "Emprender se propone como una herramienta gratuita para comercios independientes, sin suscripciones ni comisiones sobre tus ventas. Puedes descargar el APK directamente desde esta página.",
  },
  {
    question: "¿Necesito comprar hardware o terminales especiales?",
    answer:
      "Para instalar la aplicación necesitas un dispositivo Android compatible. Puedes empezar con tu teléfono o tablet; la compatibilidad con accesorios debe comprobarse según el dispositivo y la versión de la app.",
  },
  {
    question: "¿Cómo instalo el APK en mi teléfono?",
    answer:
      "Toca «Descargar APK», espera a que termine la descarga y abre el archivo Emprender.apk. Si tu dispositivo te lo pide, permite que tu navegador instale aplicaciones desde esta fuente y continúa con la instalación. Después puedes desactivar ese permiso.",
  },
  {
    question: "¿Cómo se respaldan mis ventas e inventario?",
    answer:
      "Las opciones de respaldo dependen de la versión instalada. Revisa las opciones de datos dentro de Emprender y conserva una copia de tu información antes de cambiar de dispositivo o desinstalar la aplicación.",
  },
  {
    question: "¿Puedo importar mis productos actuales desde Excel?",
    answer:
      "La compatibilidad y los formatos de importación dependen de la versión de Emprender. Consulta las opciones disponibles en el catálogo de la app antes de preparar o importar un archivo.",
  },
];
