# Emprender web

Página de descarga de la aplicación Android Emprender. Construida con React 19, TypeScript, Vite y Tailwind CSS 4, a partir del mockup inicial.

## Desarrollo

```sh
npm install
npm run dev
```

```sh
npm run build   # Verifica TypeScript y genera dist/
npm run preview # Sirve la compilación local
npm run lint    # Revisa el código
```

## Estructura

```text
src/
├── assets/                 # APK original de distribución
├── components/
│   ├── layout/             # Header y Footer
│   └── ui/                 # Button, Brand, AppIcon, Icon, IconTile, Container,
│                           # Section, SectionHeading y Dialog
├── config/app.ts           # Configuración central de la descarga
├── content/landing.ts      # Textos, navegación, tarjetas y preguntas
├── features/
│   └── download/           # Descarga e instrucciones de instalación
├── pages/LandingPage.tsx   # Composición de secciones y estado de ventanas
├── sections/               # Una carpeta por sección de la página
├── App.tsx                 # Entrada de la aplicación
├── index.css               # Tailwind, tokens @theme y estilos base
└── main.tsx                # Montaje de React
```

Cada sección encapsula su presentación. Los textos editables viven en `content/`, la configuración en `config/` y los comportamientos específicos en `features/`. Los componentes de `ui/` son compartidos y no dependen de las secciones.

El estilo se implementa con utilidades Tailwind. Los colores y la tipografía se centralizan en `@theme` dentro de `src/index.css`. No hay hojas CSS por componente ni librerías de interfaz adicionales.

## Diseño responsive

La composición parte de móvil: botones apilados, tarjetas sin alturas mínimas y márgenes de 16 px. Desde 640 px, las características y los tipos de negocio se distribuyen en dos columnas. Desde 1024 px aparece la navegación completa y las características pasan a tres columnas; los tipos de negocio usan cuatro columnas desde 1280 px. El contenido se limita a 1200 px en pantallas grandes.

El menú y la ventana de descarga permiten desplazamiento en pantallas horizontales. El menú se cierra al navegar, tocar fuera, pulsar Escape o pasar al diseño de escritorio. Los controles principales tienen un área táctil mínima de 44 px.

Verificado en Chrome con 11 tamaños de ventana entre 320 y 1920 px, incluyendo móvil horizontal y tablets, sin desbordamientos horizontales ni controles de descarga recortados.

## Distribución del APK

El archivo `src/assets/Emprender.apk` se importa como URL (`?url`). Vite lo copia a `dist/assets/` con un nombre versionado por contenido: **no se incluye en el JavaScript ni se descarga al abrir la página**. El enlace de descarga conserva el nombre `Emprender.apk`.

Para publicar una nueva versión, reemplaza ese archivo y vuelve a compilar. También puedes copiar `.env.example` a `.env.local` y configurar `VITE_APK_URL` con una URL HTTPS externa antes de compilar. En ese caso, el servidor externo debe enviar `Content-Disposition: attachment` para forzar la descarga entre dominios.

La distribución actual incluye un APK de aproximadamente 108 MiB. El hosting debe admitir ese tamaño de archivo. `dist/` es un sitio estático y no requiere un backend.

## Contenido y alcance

- Diseño responsive, navegación móvil, guía de instalación y preguntas desplegables.
- Descarga del APK real proporcionado por el propietario.
- Ventanas con `dialog` nativo: foco, Escape y cierre al tocar el fondo.
- Enlace para saltar al contenido, navegación semántica y respeto por movimiento reducido.

Los textos parten de la propuesta del mockup. Antes de publicar, confirma las capacidades de inventario, reportes, respaldo e importación de la versión Android. Se omitieron métricas de rendimiento, garantías técnicas, enlaces legales y redes sociales que todavía no se han proporcionado.
