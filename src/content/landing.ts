import type { IconName } from "../components/ui/Icon";

export const navigation = [
  { label: "Características", href: "#caracteristicas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Para quién es", href: "#para-quien" },
  { label: "Datos y respaldo", href: "#datos-y-respaldo" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
] as const;

type ContentCard = {
  icon: IconName;
  title: string;
  description: string;
  detail: string;
};

// Contrastado con el proyecto React Native. Fuentes y alcance en docs/verified-features.md.
export const features: ContentCard[] = [
  {
    icon: "receipt",
    title: "Ventas y pagos registrados",
    description:
      "Arma el carrito, consulta el total en pesos colombianos y registra el pago en efectivo o transferencia. Verifica la transferencia antes de confirmar la venta.",
    detail: "REGISTRO MANUAL DEL PAGO",
  },
  {
    icon: "box",
    title: "Catálogo e inventario",
    description:
      "En restaurantes, organiza platos, recetas e insumos. En comercio y granel, lleva productos y existencias. Las ventas descuentan el inventario correspondiente.",
    detail: "SEGÚN EL TIPO DE NEGOCIO",
  },
  {
    icon: "chart",
    title: "Reportes de ventas",
    description:
      "Consulta ventas e ingresos por categoría. Restaurantes incluye filtros por periodo y platos más vendidos; los otros modelos muestran ventas del día y acumuladas.",
    detail: "CALCULADOS CON TUS OPERACIONES",
  },
  {
    icon: "offline",
    title: "Operación local",
    description:
      "El catálogo, las ventas y las operaciones se guardan en el dispositivo. Puedes registrar la actividad del negocio sin conexión a internet.",
    detail: "DATOS EN TU DISPOSITIVO",
  },
  {
    icon: "calendar",
    title: "Pedidos, reservas y citas",
    description:
      "Restaurantes tiene seguimiento de preparación. Alquileres registra entregas, devoluciones y garantías. Servicios permite asignar citas a profesionales.",
    detail: "CADA MODELO TIENE SU OPERACIÓN",
  },
  {
    icon: "download",
    title: "Respaldo manual",
    description:
      "Desde Configuración, exporta una copia de la base de datos y guárdala donde prefieras. Puedes importar un respaldo para restaurar la información del negocio.",
    detail: "EXPORTAR E IMPORTAR BACKUP",
  },
];

export const dataPractices: ContentCard[] = [
  {
    icon: "phone",
    title: "Información en el dispositivo",
    description:
      "La aplicación guarda el perfil del negocio y su operación en una base de datos local. No incluye sincronización automática entre dispositivos.",
    detail: "",
  },
  {
    icon: "lock",
    title: "Usuario local",
    description:
      "Crea tu usuario con contraseña, PIN y pregunta de seguridad. El registro y el inicio de sesión se realizan con los datos guardados en la app.",
    detail: "",
  },
  {
    icon: "download",
    title: "Tú guardas el respaldo",
    description:
      "Usa «Realizar backup» para compartir y guardar el archivo .db. «Importar backup» reemplaza la base actual con la copia seleccionada y solicita iniciar sesión de nuevo.",
    detail: "",
  },
];

export const audiences: (ContentCard & { id: string })[] = [
  {
    id: "restaurantes",
    icon: "coffee",
    title: "Restaurante y preparación",
    description:
      "Crea platos con recetas e insumos. Registra ventas por mesa, para llevar o a domicilio y sigue el estado de preparación de los pedidos.",
    detail: "Menú, recetas e insumos",
  },
  {
    id: "alquileres",
    icon: "calendar",
    title: "Alquiler y renta",
    description:
      "Registra activos y reservas con tarifas por hora, día o mes. Lleva entregas, devoluciones, mantenimiento y devolución o retención de garantías.",
    detail: "Activos, periodos y garantías",
  },
  {
    id: "granel",
    icon: "ruler",
    title: "Granel, peso y volumen",
    description:
      "Vende por ml, litros, gramos, kilos o metros. Ingresa la cantidad y la tara manualmente; registra el empaque como un artículo separado.",
    detail: "Cantidades y precios proporcionales",
  },
  {
    id: "comercio",
    icon: "store",
    title: "Comercio por unidad",
    description:
      "Organiza productos por SKU, variante y código de barras. Registra lotes y vencimientos, controla existencias y consulta los movimientos de inventario.",
    detail: "Catálogo y venta por piezas",
  },
  {
    id: "servicios",
    icon: "scissors",
    title: "Servicios y contenido digital",
    description:
      "Agenda servicios con duración y profesional. Comparte enlaces y registra entregas digitales. Lleva planes de suscripción con renovaciones de cobro manual.",
    detail: "Agenda, entregas y planes",
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
    title: "Configura tu emprendimiento",
    description:
      "Crea tu usuario local, escribe el nombre de tu negocio y elige uno de los cinco tipos. Después registra tu catálogo para comenzar a operar.",
  },
];

export const faqs = [
  {
    question: "¿Necesito internet para usar Emprender?",
    answer:
      "La operación del negocio es local: puedes registrar ventas y consultar los datos guardados sin internet. Necesitas conexión para descargar el APK, realizar una transferencia en tu servicio bancario o abrir contenido alojado en una plataforma externa.",
  },
  {
    question: "¿La app procesa los pagos de mis clientes?",
    answer:
      "La app registra pagos en efectivo o transferencia en pesos colombianos y calcula el cambio en efectivo. La transferencia se realiza por fuera de Emprender: verifica que recibiste el dinero antes de registrar la venta. No hay una pasarela de pago integrada.",
  },
  {
    question: "¿Cómo instalo el APK en mi teléfono?",
    answer:
      "Toca «Descargar APK», espera a que termine la descarga y abre el archivo Emprender.apk. Si tu dispositivo te lo pide, permite que tu navegador instale aplicaciones desde esta fuente y continúa con la instalación. Después puedes desactivar ese permiso.",
  },
  {
    question: "¿Cómo se respaldan mis ventas e inventario?",
    answer:
      "En Configuración, toca «Realizar backup» y guarda el archivo .db fuera de la app. Para recuperarlo, usa «Importar backup». La restauración reemplaza los datos actuales con los del archivo y requiere iniciar sesión de nuevo. El respaldo es manual; no hay copia automática en la nube.",
  },
  {
    question: "¿Puedo importar mis productos actuales desde Excel?",
    answer:
      "La app no incluye importación de productos desde Excel: el catálogo se registra dentro de Emprender. En el modelo de restaurante sí puedes exportar reportes de ventas como CSV para abrirlos en una hoja de cálculo. La importación de backup restaura una base de datos, no una hoja de Excel.",
  },
  {
    question: "¿Puedo usar varios tipos de negocio al mismo tiempo?",
    answer:
      "Al configurar Emprender eliges un solo tipo de negocio para esa base de datos. Esa elección determina el catálogo y las operaciones disponibles. Una vez guardada, no se puede cambiar desde la app ni mezclar con otro modelo.",
  },
  {
    question: "¿Las suscripciones y los accesos digitales son automáticos?",
    answer:
      "En el modelo de servicios, cada renovación se registra manualmente después de verificar el pago. Compartir un enlace o marcar una entrega o revocación solo actualiza el registro en Emprender; los permisos del cliente se gestionan en la plataforma externa donde está alojado el contenido.",
  },
];
