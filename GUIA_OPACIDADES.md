# 🎨 Guía de Opacidades - ProCustomShop

Esta guía te muestra dónde editar la opacidad de cada elemento de la página.

---

## 1️⃣ NAVBAR (Barra de Navegación)

**Archivo:** `css/styles.css`

**Línea:** ~47

```css
.bg-dark-custom {
    background-color: var(--dark-blue) !important;
}
```

**Cómo cambiar:**
- Reemplaza `var(--dark-blue)` con un color con opacidad
- Ejemplo: `rgba(3, 7, 71, 0.95)` (donde 0.95 es la opacidad: 0 = transparente, 1 = opaco)

---

## 2️⃣ FONDO PRINCIPAL (main)

**Archivo:** `css/styles.css`

**Línea:** ~76-78

```css
main {
    background-color: rgba(248, 249, 250, 0.25);  ← OPACIDAD AQUÍ
    min-height: calc(100vh - 56px);
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.05);
}
```

**Cómo cambiar:**
- Modifica el cuarto valor: `rgba(248, 249, 250, 0.25)`
- `0.25` = 25% opacidad (más transparente)
- `0.50` = 50% opacidad
- `0.75` = 75% opacidad
- `1.00` = 100% opacidad (totalmente opaco)

---

## 3️⃣ SECCIÓN HERO (Título y descripción)

**Archivo:** `css/styles.css`

**Línea:** ~89-94

```css
.hero-section {
    padding: 3rem 0;
    animation: fadeInDown 0.8s ease-out;
    background: rgba(255, 255, 255, 0.40);  ← OPACIDAD AQUÍ
    border-radius: 10px;
    padding: 3rem;
}
```

**Cómo cambiar:**
- Modifica: `rgba(255, 255, 255, 0.40)`
- El cuarto número (0.40) es la opacidad

---

## 4️⃣ TARJETAS (Cards - Motos de Calidad, Personalización, etc.)

**Archivo:** `css/styles.css`

**Línea:** ~134-140

```css
.card {
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.60);  ← OPACIDAD AQUÍ
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

**Cómo cambiar:**
- Modifica: `rgba(255, 255, 255, 0.60)`
- El cuarto número (0.60) es la opacidad

---

## 📊 TABLA DE REFERENCIA RÁPIDA

| Elemento | Archivo | Línea | Propiedad | Opacidad Actual |
|----------|---------|-------|-----------|-----------------|
| Navbar | styles.css | 47 | background-color | 1.00 (opaco) |
| Fondo Principal | styles.css | 76 | background-color | 0.25 |
| Sección Hero | styles.css | 91 | background | 0.40 |
| Tarjetas | styles.css | 138 | background-color | 0.60 |

---

## 🎯 VALORES RECOMENDADOS

- **Muy transparente:** 0.10 - 0.30
- **Medio:** 0.40 - 0.60
- **Poco transparente:** 0.70 - 0.90
- **Opaco (sin transparencia):** 1.00

---

## 💡 CONSEJO

Para editar rápido, busca en el archivo `styles.css`:
- Busca: `rgba(` y verás todos los elementos con opacidad
- El cuarto valor siempre es la opacidad que puedes cambiar

¡Diviértete personalizando! 🎨
