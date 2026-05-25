# Blueprint: Directorio Monterrey

## Proyecto: Directorio de Negocios en Monterrey

Este proyecto es un directorio de locales y negocios interactivo y moderno, diseñado específicamente con Angular v21+, haciendo un uso exhaustivo de Standalone Components, Signals para la reactividad de estado, el nuevo Control Flow de Angular (`@if`, `@for`, `@switch`) y la estrategia de detección de cambios `OnPush` para un rendimiento premium.

---

## 1. Propósito y Capacidades
* **Directorio de Locales Comercial**: Permite a los usuarios navegar por diferentes negocios y locales comerciales de manera ágil y responsiva.
* **Detalle Completo de Negocio**: Visualización en profundidad de cada local, incluyendo su información de contacto (piso, ubicación, teléfono), galería de ambiente, lista de servicios destacados y catálogo de productos con precios.
* **Diseño Premium y Responsivo**: Interfaz fluida adaptada a dispositivos móviles y web.
* **Sistema de Temas (Claro/Oscuro)**: Un botón intuitivo de Luna/Sol que conmuta dinámicamente toda la experiencia del usuario entre un tema oscuro sutil y un tema claro vibrante, persistiendo la selección del usuario.
* **Navegación Intuitiva**: Menú inferior flotante que se adapta a dispositivos móviles para cambiar entre las secciones principales (Home, Locales, Contacto) sin interrumpir la experiencia.

---

## 2. Estilos, Diseño y Características Implementadas
* **Estrategia de Temas**:
  * Implementada en SASS (`custom-theme.scss`) con temas definidos de Angular Material ($tema-oscuro por defecto y $tema-claro para `.light`).
  * Conmutador reactivo a través de la clase `light` aplicada en el elemento raíz `<html>`.
* **Diseño Visual**:
  * Animaciones suaves con transiciones de 0.3s cubic-bezier.
  * Sombras multi-capa y elevadas para tarjetas e imágenes.
  * Tipografía moderna con Roboto.

---

## 3. Plan para la Corrección de Errores de Tema (Fase Actual)

### El Problema
1. Al entrar en el componente de Tarjeta (`app-card`), el título tiene estilos en línea (`style="color: black;"`) que bloquean el tema oscuro, haciéndolo ilegible.
2. Al navegar a la vista de Detalles de Negocio (`DetallesNegocio`), el componente tiene colores y fondos estáticos e integrados (`background: white`, `background-color: #f9f9f9`, etc.) que no responden en absoluto a la activación del modo oscuro o claro, arruinando la inmersión del usuario.
3. El botón de retroceso (`BtnBack`) tiene colores fijos (`#333`) que lo vuelven casi invisible sobre fondos oscuros.

### Solución Propuesta
1. **Sistema de Variables CSS en styles.css**: Definiremos un mapa de variables CSS personalizables en `:root` (modo oscuro por defecto) y `html.light` (modo claro) para fondos primarios, secundarios, textos, bordes, sombras y acentos.
2. **Globalización del Fondo**: Aplicar el color de fondo `var(--bg-primary)` y color de texto `var(--text-primary)` al elemento `body` de forma que toda la aplicación se adapte fluidamente y con transiciones.
3. **Limpieza del Título en app-card**: Remover el color en línea de `mat-card-title` para que el tema Material o las variables globales dicten el contraste correcto.
4. **Refactorización de detalles-negocio.css**: Cambiar todos los colores estáticos de fondo, fuentes, bordes y acentos por variables CSS adaptables.
5. **Ajuste del Botón Atrás (BtnBack)**: Hacer que el ícono de flecha tome el color del texto del tema y se ilumine con el color de acento al pasar el ratón.
6. **Persistencia del Tema**: Mejorar el botón `btn-luna-sol` para guardar el estado del tema en `localStorage`, asegurando que no se pierda al recargar la página.
