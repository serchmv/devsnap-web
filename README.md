# 🚀 DevSnap Consulting - Portfolio Corporativo

**Consultora especializada en desarrollo web, marketing digital y automatización empresarial**

![DevSnap Banner](https://img.shields.io/badge/DevSnap-Consulting-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite)

## 📋 Descripción del Proyecto

DevSnap Consulting es una consultora especializada en:
- **🌐 Desarrollo Web Enterprise** - React, TypeScript, soluciones escalables
- **📱 Marketing Digital Automatizado** - Redes sociales, lead generation, CRM
- **🤖 Automatización Empresarial** - Workflows, chatbots IA, integración de sistemas
- **🏗️ Infraestructura Digital** - Hosting premium, emails corporativos, seguridad

## 🛠️ Stack Tecnológico

### Frontend
- **React 18.3** - Framework JavaScript moderno
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Build tool optimizado y rápido
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconografía moderna

### Herramientas de Desarrollo
- **ESLint** - Linting y calidad de código
- **Prettier** - Formateo automático
- **Husky** - Git hooks pre-commit
- **Vercel/Netlify** - Deployment automático

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18+ (recomendado LTS)
- **npm** o **yarn**
- **Git**
- **Visual Studio Code** (recomendado)

### 1. Clonar el Repositorio
```bash
# Clonar desde GitHub
git clone https://github.com/serchmv/devsnap-web.git

# Entrar al directorio
cd devsnap-web
```

### 2. Instalar Dependencias
```bash
# Con npm
npm install

# O con yarn
yarn install
```

### 3. Configurar Variables de Entorno
```bash
# Crear archivo de variables de entorno
cp .env.example .env

# Editar variables necesarias
code .env
```

### 4. Levantar Servidor de Desarrollo
```bash
# Iniciar en modo desarrollo
npm run dev

# O con yarn
yarn dev
```

### 5. Abrir en Visual Studio Code
```bash
# Abrir proyecto en VS Code
code .

# O desde VS Code:
# File > Open Folder > Seleccionar carpeta devsnap-web
```

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (http://localhost:5173)
yarn dev

# Build para producción
npm run build        # Compilar para producción
yarn build

# Preview build
npm run preview      # Vista previa del build
yarn preview

# Linting y formato
npm run lint         # Ejecutar ESLint
npm run format       # Formatear con Prettier
yarn lint
yarn format

# Type checking
npm run type-check   # Verificar tipos TypeScript
yarn type-check
```

## 🏗️ Estructura del Proyecto

```
devsnap-web/
├── 📁 public/                      # Archivos públicos estáticos
│   ├── 📁 data/                    # Archivos JSON de datos
│   │   └── devsnap-content.json    # Contenido principal del sitio
│   ├── 📁 images/                  # Imágenes del sitio
│   │   ├── 📁 services/            # Imágenes de servicios
│   │   └── 📁 tech-logos/          # Logos de tecnologías
│   ├── 📁 videos/                  # Videos del sitio
│   └── use.txt                     # Archivo de configuración
├── 📁 src/                         # Código fuente principal
│   ├── 📁 components/              # Componentes React
│   │   ├── 📁 common/              # Componentes comunes reutilizables
│   │   │   ├── ClientLogo.tsx      # Logo de clientes
│   │   │   ├── OptimizedImage.tsx  # Imagen optimizada
│   │   │   ├── OptimizedVideo.tsx  # Video optimizado
│   │   │   └── TechLogo.tsx        # Logo de tecnologías
│   │   ├── 📁 specialties/         # Páginas de especialidades
│   │   │   ├── APIMicroservicesPage.tsx     # API y Microservicios
│   │   │   ├── AutomatizacionRPAPage.tsx    # Automatización RPA
│   │   │   ├── CiberseguridadPage.tsx       # Ciberseguridad
│   │   │   ├── CloudMigrationPage.tsx       # Migración a la nube
│   │   │   ├── ContentMarketingPage.tsx     # Marketing de contenidos
│   │   │   └── IAMachineLearningPage.tsx    # IA y Machine Learning
│   │   ├── 📁 ui/                  # Componentes UI de shadcn/ui
│   │   │   ├── accordion.tsx       # Acordeón expandible
│   │   │   ├── alert-dialog.tsx    # Diálogo de alerta
│   │   │   ├── alert.tsx           # Alertas
│   │   │   ├── aspect-ratio.tsx    # Ratio de aspecto
│   │   │   ├── avatar.tsx          # Avatar de usuario
│   │   │   ├── badge.tsx           # Badges/etiquetas
│   │   │   ├── breadcrumb.tsx      # Breadcrumb navegación
│   │   │   ├── button.tsx          # Botones
│   │   │   ├── calendar.tsx        # Calendario
│   │   │   ├── card.tsx            # Tarjetas
│   │   │   ├── carousel.tsx        # Carrusel
│   │   │   ├── chart.tsx           # Gráficos
│   │   │   ├── checkbox.tsx        # Checkbox
│   │   │   ├── collapsible.tsx     # Colapsable
│   │   │   ├── command.tsx         # Comando/búsqueda
│   │   │   ├── context-menu.tsx    # Menú contextual
│   │   │   ├── dialog.tsx          # Diálogos modales
│   │   │   ├── drawer.tsx          # Drawer lateral
│   │   │   ├── dropdown-menu.tsx   # Menú desplegable
│   │   │   ├── form.tsx            # Formularios
│   │   │   ├── hover-card.tsx      # Tarjeta hover
│   │   │   ├── input-otp.tsx       # Input OTP
│   │   │   ├── input.tsx           # Campos de entrada
│   │   │   ├── label.tsx           # Etiquetas
│   │   │   ├── menubar.tsx         # Barra de menú
│   │   │   ├── navigation-menu.tsx # Menú de navegación
│   │   │   ├── pagination.tsx      # Paginación
│   │   │   ├── popover.tsx         # Popover
│   │   │   ├── progress.tsx        # Barra de progreso
│   │   │   ├── radio-group.tsx     # Radio buttons
│   │   │   ├── resizable.tsx       # Redimensionable
│   │   │   ├── scroll-area.tsx     # Área con scroll
│   │   │   ├── select.tsx          # Select/dropdown
│   │   │   ├── separator.tsx       # Separador
│   │   │   ├── sheet.tsx           # Sheet/panel
│   │   │   ├── sidebar.tsx         # Barra lateral
│   │   │   ├── skeleton.tsx        # Skeleton loader
│   │   │   ├── slider.tsx          # Slider/deslizador
│   │   │   ├── sonner.tsx          # Notificaciones toast
│   │   │   ├── switch.tsx          # Switch toggle
│   │   │   ├── table.tsx           # Tablas
│   │   │   ├── tabs.tsx            # Pestañas
│   │   │   ├── textarea.tsx        # Área de texto
│   │   │   ├── toast.tsx           # Toast notifications
│   │   │   ├── toaster.tsx         # Contenedor de toasts
│   │   │   ├── toggle-group.tsx    # Grupo de toggles
│   │   │   ├── toggle.tsx          # Toggle button
│   │   │   └── tooltip.tsx         # Tooltips
│   │   ├── 📁 widgets/             # Widgets especiales
│   │   │   └── WhatsAppWidgetDevSnap.tsx # Widget de WhatsApp
│   │   ├── AboutUsSection.tsx      # Sección Nosotros
│   │   ├── ClientsSection.tsx      # Sección Clientes
│   │   ├── DetailedServicesSection.tsx # Sección Servicios Detallados
│   │   ├── DifferentiatorsSection.tsx  # Sección Diferenciadores
│   │   ├── DnaSection.tsx          # Sección ADN
│   │   ├── ErrorBoundary.tsx       # Manejo de errores
│   │   ├── Footer.tsx              # Pie de página
│   │   ├── Header.tsx              # Encabezado
│   │   ├── Hero.tsx                # Hero/Banner principal
│   │   ├── JoinUsSection.tsx       # Sección Únete
│   │   ├── ModernizationSection.tsx # Sección Modernización
│   │   ├── NewsletterSection.tsx   # Sección Newsletter
│   │   ├── ServicesSection.tsx     # Sección Servicios
│   │   └── TechCentersSection.tsx  # Sección Centros Tech
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── use-mobile.tsx          # Hook para detectar móvil
│   │   └── use-toast.ts            # Hook para toasts
│   ├── 📁 lib/                     # Librerías y utilidades
│   │   └── utils.ts                # Funciones de utilidad
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Punto de entrada
│   ├── index.css                   # Estilos globales
│   └── vite-env.d.ts              # Tipos de Vite
├── 📁 scripts/                     # Scripts de automatización
│   ├── generate-optimized-assets.js # Optimización de assets
│   └── optimize-assets.md          # Documentación de optimización
├── 📁 dist/                        # Build de producción
│   ├── 📁 assets/                  # Assets compilados
│   └── 📁 data/                    # Datos de producción
├── 📁 .github/                     # Configuración GitHub
│   └── copilot-instructions.md     # Instrucciones Copilot
├── 📁 .clinerules/                 # Reglas CLI
├── 📁 .cursor/                     # Configuración Cursor
│   └── 📁 rules/                   # Reglas de Cursor
├── 📁 .kilocode/                   # Configuración Kilocode
│   └── 📁 rules/                   # Reglas de Kilocode
├── 📁 test/                        # Tests
├── components.json                 # Configuración de componentes UI
├── eslint.config.js               # Configuración ESLint
├── index.html                     # HTML principal
├── package.json                   # Dependencias del proyecto
├── pnpm-lock.yaml                # Lock file de pnpm
├── postcss.config.js             # Configuración PostCSS
├── tailwind.config.js            # Configuración Tailwind CSS
├── tsconfig.app.json             # Configuración TypeScript app
├── tsconfig.json                 # Configuración TypeScript principal
├── tsconfig.node.json            # Configuración TypeScript node
├── vite.config.ts                # Configuración Vite
└── README.md                     # Este archivo
```

## 🔧 Configuración Visual Studio Code

### Extensiones Recomendadas
Instalar las siguientes extensiones para una mejor experiencia:

```bash
# Abrir VS Code y ir a Extensions (Ctrl+Shift+X)
# Buscar e instalar:
```

- **ES7+ React/Redux/React-Native snippets** - Snippets para React
- **TypeScript Hero** - Organización automática de imports
- **Tailwind CSS IntelliSense** - Autocompletado para TailwindCSS
- **Prettier - Code formatter** - Formateo automático
- **ESLint** - Linting en tiempo real
- **Auto Rename Tag** - Renombrado automático de tags
- **Bracket Pair Colorizer** - Colores para brackets
- **GitLens** - Git integrado mejorado

### Configuración VS Code (settings.json)
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## 🌐 URLs de Desarrollo

- **Desarrollo Local:** http://localhost:5173
- **Preview Build:** http://localhost:4173
- **Producción:** https://devsnap-consulting.netlify.app

## 📱 Servicios DevSnap

### 🌐 Desarrollo Web Enterprise
- Sitios web corporativos premium
- Aplicaciones web React/TypeScript
- E-commerce personalizado
- Sistemas de gestión (CRM, ERP)

### 📊 Marketing Digital Automatizado
- Gestión completa redes sociales (5 plataformas)
- Automatización con chatbots IA
- Campañas pagadas Facebook/Google Ads
- Lead generation y nurturing

### 🤖 Automatización Empresarial
- Workflows con Make.com/Zapier
- Integración sistemas (CRM, email, WhatsApp)
- Chatbots inteligentes 24/7
- Reportes automáticos

### 🏗️ Infraestructura Digital
- Hosting premium SSD
- Emails corporativos
- Certificados SSL
- Backup automático
- CDN global

## 🎯 Casos de Éxito

### Sector Inmobiliario
- **+400% leads** en 6 meses
- **ROI 650%** en campañas pagadas
- **85% ventas** atribuidas a digital
- **Cost per lead** 47% menor al promedio

### E-commerce
- **+250% conversiones** web
- **Tiempo de carga** <2 segundos
- **Mobile optimization** 98% score
- **Abandoned cart recovery** 35%

## 📞 Contacto

- **👨‍💼 Director:** Ing. Sergio Morales Valencia
- **📧 Email:** sergio.morales@devsnap.com.mx
- **📱 WhatsApp:** +52 55 6135 3113
- **🌐 Web:** https://devsnap-consulting.com
- **📍 Ubicación:** Ciudad de México, México

## 🔒 Licencia

© 2025 DevSnap Consulting. Todos los derechos reservados.

---

## 🚀 Quick Start Guide

### Para desarrolladores nuevos:

1. **Clonar y configurar:**
```bash
git clone https://github.com/serchmv/devsnap-web.git
cd devsnap-web
npm install
code .
```

2. **Abrir terminal integrada en VS Code:** `Ctrl + `` (backtick)

3. **Iniciar desarrollo:**
```bash
npm run dev
```

4. **Abrir navegador:** http://localhost:5173

### Para modificaciones:

1. **Crear nueva rama:**
```bash
git checkout -b feature/nueva-funcionalidad
```

2. **Hacer cambios y commit:**
```bash
git add .
git commit -m "feat: agregar nueva funcionalidad"
```

3. **Push y crear PR:**
```bash
git push origin feature/nueva-funcionalidad
```

## 📈 Performance Targets

- **Lighthouse Score:** >95
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3s
- **Bundle Size:** <500KB
- **Core Web Vitals:** All Green

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo: sergio.morales@devsnap.com.mx