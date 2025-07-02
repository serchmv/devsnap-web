# Guía de Optimización de Assets para DevSnap

## 🎯 Objetivos
- Reducir el tiempo de carga en móviles en un 70%
- Crear versiones optimizadas para diferentes dispositivos
- Implementar lazy loading y carga condicional

## 📁 Estructura de Assets Optimizados

```
public/
├── images/
│   ├── clients/
│   │   ├── oracle-logo.png          # Original (800x600)
│   │   ├── oracle-logo-mobile.webp  # Móvil (400x300)
│   │   ├── movistar-logo.png
│   │   ├── movistar-logo-mobile.webp
│   │   └── ...
│   ├── tech-logos/
│   │   ├── aws-logo.png
│   │   ├── aws-logo-mobile.webp
│   │   └── ...
│   ├── DS.png                       # Logo original
│   ├── DS-mobile.webp              # Logo móvil
│   └── placeholder.svg             # Placeholder genérico
└── videos/
    ├── junta.mp4                   # Original (1920x1080)
    ├── junta-mobile.mp4           # Móvil (720x480)
    └── video-poster.jpg           # Poster del video
```

## 🛠️ Comandos de Optimización

### Para Imágenes (usando ImageMagick o similar):

```bash
# Convertir a WebP para móviles (logos de clientes)
convert oracle-logo.png -resize 400x300 -quality 85 oracle-logo-mobile.webp

# Convertir logos de tecnologías
convert aws-logo.png -resize 128x128 -quality 85 aws-logo-mobile.webp

# Logo principal
convert DS.png -resize 128x128 -quality 95 DS-mobile.webp
```

### Para Videos (usando FFmpeg):

```bash
# Crear versión mobile del video de fondo
ffmpeg -i junta.mp4 -vf scale=720:480 -crf 28 -preset medium -movflags +faststart junta-mobile.mp4

# Crear poster del video
ffmpeg -i junta.mp4 -ss 00:00:02 -vframes 1 -q:v 2 video-poster.jpg
```

## 📊 Especificaciones de Optimización

### Imágenes:
- **Desktop**: 800x600px, Quality 85%, WebP cuando sea posible
- **Mobile**: 400x300px, Quality 80%, WebP preferido
- **Logos**: 128x128px desktop, 64x64px mobile
- **Placeholders**: SVG vectoriales para carga instantánea

### Videos:
- **Desktop**: 1920x1080px, CRF 23, H.264
- **Mobile**: 720x480px, CRF 28, H.264, optimizado para streaming
- **Poster**: 1920x1080px, JPEG quality 75%

## 🚀 Implementaciones de Performance

### 1. Lazy Loading
- Imágenes y videos se cargan solo cuando están en viewport
- Intersection Observer para detección precisa

### 2. Carga Condicional
- Videos no se cargan en conexiones 2G/slow-2G
- Fallback a imágenes estáticas en conexiones lentas

### 3. Detección de Dispositivo
- Automática basada en window.innerWidth
- Responsive images para diferentes densidades de píxeles

### 4. Placeholders Optimizados
- Esqueletos de carga con CSS
- SVG placeholders de peso mínimo
- Estados de carga con feedback visual

## 📱 Estrategias Mobile-First

### Connection API
```javascript
// Detectar conexión lenta y ajustar calidad
if ('connection' in navigator) {
  const connection = navigator.connection;
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    // No cargar videos, usar placeholders
  }
}
```

### Preload Strategy
```javascript
// Solo precargar metadata en móviles
<video preload={isMobile ? 'metadata' : 'auto'} />
```

## 🎨 Formato de Assets por Uso

| Asset Type | Desktop | Mobile | Fallback |
|------------|---------|--------|----------|
| Logos Cliente | PNG/WebP 400x300 | WebP 200x150 | SVG Text |
| Tech Logos | PNG/WebP 128x128 | WebP 64x64 | Text Badge |
| Backgrounds | WebP 1920x1080 | WebP 720x480 | Solid Color |
| Videos | MP4 1920x1080 | MP4 720x480 | Poster Image |

## 📈 Métricas de Performance Esperadas

- **Tiempo de carga inicial**: -70% en móviles
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bandwidth savings**: 60-80% en móviles

## 🔧 Próximos Pasos

1. ✅ Crear componentes OptimizedImage y OptimizedVideo
2. ✅ Implementar en todas las secciones
3. ⏳ Generar assets optimizados reales
4. ⏳ Configurar CDN para distribución eficiente
5. ⏳ Implementar service worker para cache inteligente