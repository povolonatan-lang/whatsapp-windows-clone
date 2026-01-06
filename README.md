# WhatsApp Web Clone

## Descripción del Desafío
Este proyecto consiste en una réplica fiel de la interfaz de WhatsApp Web, desarrollada con **React** y **Vite**. La aplicación simula la experiencia de mensajería con un diseño basado en el tema claro original.

## Funcionalidades
- **Diseño Responsivo**: Adaptable a pantallas desde 320px hasta 2000px.
    - *Escritorio*: Vista dividida (Lista de contactos + Chat).
    - *Móvil*: Navegación completa (Lista -> Chat -> Volver).
- **Gestión de Estado**: Uso de `Context API` para manejar contactos, mensajes y el usuario actual de forma global.
- **Enrutamiento**: Implementado con `react-router-dom` v7.
- **Búsqueda**: Filtrado de contactos en tiempo real.
- **Formularios**: Envío de mensajes funcionales que actualizan el historial y la vista previa del chat.

## Librerías Utilizadas
- `react` / `react-dom`: Núcleo de la aplicación.
- `react-router-dom`: Manejo de rutas.
- `lucide-react`: Iconos SVG optimizados y consistentes.

## Dificultades y Soluciones
- **Layout Responsivo**: Lograr que la barra lateral permanezca visible en escritorio pero se oculte en móvil al entrar a un chat se resolvió combinando *Media Queries* en CSS con lógica de renderizado condicional en `Layout.jsx` basada en la ruta actual.
- **Estilos Idénticos**: Se utilizaron variables CSS extraídas de colores estándar de WhatsApp Web para garantizar la fidelidad visual (Light Mode).

## Ejecución
1. Instalar dependencias: `npm install`
2. Correr entorno local: `npm run dev`
3. Construir para producción: `npm run build`
