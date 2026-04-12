# 📋 Guía de Personalizacion - Catálogo y Ubicación

## 🎯 ¿Qué se agregó?

Se agregaron dos nuevas secciones a tu landing page:

1. **Sección de Catálogo** - Muestra motos disponibles
2. **Sección de Ubicación** - Información de contacto y mapa

---

## 🛍️ SECCIÓN CATÁLOGO

### Ubicación en el código:
**Archivo:** `index.html` (línea ~60)

### ¿Cómo personalizar?

#### Cambiar nombre de moto:
```html
<h5>Moto Deportiva Pro</h5>  ← Cambia este texto
```

#### Cambiar precio:
```html
<p class="price">$25,000</p>  ← Cambia el precio
```

#### Cambiar imagen:
```html
<img src="https://via.placeholder.com/300x200?text=Moto+1" alt="Moto 1" class="img-fluid">
```

Reemplaza la URL por tu propia imagen. Opciones:
- **Imagen local:** `src="images/moto1.jpg"`
- **Imagen externa:** `src="https://example.com/moto.jpg"`
- **Placeholder:** `src="https://via.placeholder.com/300x200?text=Tu+Texto"`

#### Agregar más motos:
Copia este bloque y pégalo dentro del `<div class="row">`:

```html
<div class="col-md-3 mb-4">
    <div class="catalog-card">
        <div class="catalog-image">
            <img src="https://via.placeholder.com/300x200?text=Moto+5" alt="Moto 5" class="img-fluid">
        </div>
        <div class="catalog-info">
            <h5>Nombre de la Moto</h5>
            <p class="price">$XX,XXX</p>
            <button class="btn btn-sm btn-primary">Ver Detalles</button>
        </div>
    </div>
</div>
```

---

## 📍 SECCIÓN UBICACIÓN

### Ubicación en el código:
**Archivo:** `index.html` (línea ~110)

### ¿Cómo personalizar?

#### Cambiar dirección:
```html
<p><strong>📍 Dirección:</strong> Calle Principal 123, Ciudad, País</p>
```

#### Cambiar teléfono:
```html
<p><strong>📞 Teléfono:</strong> +1 (555) 123-4567</p>
```

#### Cambiar email:
```html
<p><strong>✉️ Email:</strong> info@procustomshop.com</p>
```

#### Cambiar horario:
```html
<p><strong>🕐 Horario:</strong> Lunes - Viernes: 9:00 AM - 6:00 PM</p>
<p><strong></strong> Sábado: 10:00 AM - 4:00 PM</p>
<p><strong></strong> Domingo: Cerrado</p>
```

#### Cambiar mapa (Google Maps):
1. Ve a [Google Maps](https://maps.google.com)
2. Encuentra tu ubicación
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código `<iframe>`
5. Reemplaza el iframe en tu HTML

**Actual:**
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300"></iframe>
```

---

## 🎨 ESTILOS CSS

Todos los nuevos elementos usan los mismos temas y opacidades que ya configuraste:

- **Catálogo y Ubicación:** `background: rgba(255, 255, 255, 0.15)`
- **Cards individuales:** `background-color: rgba(255, 255, 255, 0.30)`
- **Todos con blur:** `backdrop-filter: blur(10px)`

Puedes modificar estas opacidades en `css/styles.css`:
- Busca `.catalog-section` (línea ~180)
- Busca `.location-section` (línea ~220)

---

## 📌 NAVBAR ACTUALIZADO

Se agregaron nuevos enlaces en el navbar:
- **Home** → `#home`
- **Catálogo** → `#catalogo`
- **Ubicación** → `#ubicacion`

Estos hacen scroll automático a cada sección. ¡Totalmente funcional! 🎯

---

## 💡 TIPS DE PERSONALIZACIÓN

1. **Emojis:** Puedes cambiar los emojis (📍📞✉️🕐) por otros desde [emojipedia.org](https://emojipedia.org)

2. **Colores:** Los títulos usan `color: var(--text-dark)` - si cambias esta variable en `:root`, cambiarán en toda la página

3. **Responsivo:** Todo es responsive - se adapta a móviles, tablets y desktop automáticamente

4. **Animaciones:** Al pasar el mouse sobre las tarjetas de catálogo, suben y se vuelven más claras

¡Diviértete personalizando! 🚀
