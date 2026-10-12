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
├── assets/                 # Icono de la app y QR de descarga
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

La composición parte de móvil: botones apilados, tarjetas sin alturas mínimas y márgenes de 16 px. Desde 640 px, las características y los tipos de negocio se distribuyen en dos columnas. Desde 1024 px aparece la navegación completa y ambas cuadrículas pasan a tres columnas. El contenido se limita a 1200 px en pantallas grandes.

El menú y la ventana de descarga permiten desplazamiento en pantallas horizontales. El menú se cierra al navegar, tocar fuera, pulsar Escape o pasar al diseño de escritorio. Los controles principales tienen un área táctil mínima de 44 px.

Verificado en Chrome con 11 tamaños de ventana entre 320 y 1920 px, incluyendo móvil horizontal y tablets, sin desbordamientos horizontales ni controles de descarga recortados.

## Distribución del APK

La descarga apunta a GitHub Releases mediante la URL centralizada en `src/config/app.ts`:

```text
https://github.com/AkaMario/emprender-lading/releases/download/app/Emprender.apk
```

El APK se obtiene al solicitar la descarga. No se incluye una copia del APK en el código de la web ni en `dist/`.

Para cambiar de versión o servidor, actualiza la URL de configuración, o copia `.env.example` a `.env.local` y configura `VITE_APK_URL` antes de compilar. El servidor externo debe enviar `Content-Disposition: attachment` para forzar la descarga entre dominios. Si el nuevo APK mantiene la misma URL, no hace falta recompilar la página.

`dist/` es un sitio estático y no requiere un backend ni alojar el APK.

## Contenido y alcance

- Diseño responsive, navegación móvil, guía de instalación y preguntas desplegables.
- Descarga del APK real proporcionado por el propietario.
- Ventanas con `dialog` nativo: foco, Escape y cierre al tocar el fondo.
- Enlace para saltar al contenido, navegación semántica y respeto por movimiento reducido.

Los textos se contrastaron con el código local de React Native en `/home/muparela/Local Projects/POS EMPRENDIMIENTOS/`. La [referencia de funcionalidades verificadas](docs/verified-features.md) documenta las fuentes y las diferencias entre los cinco modelos de negocio. No se incluyen métricas de rendimiento ni promesas de precios futuros.

La revisión describe las funciones implementadas en ese código fuente. No certifica que el APK publicado en GitHub se haya compilado desde la misma revisión ni sustituye una prueba de la app en Android. Al cambiar la app o publicar un APK, revisa también el contenido de la web.
