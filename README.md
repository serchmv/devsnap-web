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
- **TypeScript 5.6** - Tipado estático para mayor robustez
- **Vite 6.0** - Build tool optimizado y rápido
- **TailwindCSS 3.4** - Framework CSS utility-first
- **Shadcn/ui** - Componentes UI con Radix UI
- **Lucide React** - Iconografía moderna
- **React Router DOM** - Navegación SPA
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Herramientas de Desarrollo
- **ESLint 9.15** - Linting y calidad de código
- **TypeScript ESLint** - Linting específico para TypeScript
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos
- **PNPM** - Gestor de paquetes eficiente

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Node.js** 18+ (recomendado LTS)
- **PNPM** (recomendado) o **npm**
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
# Con pnpm (recomendado)
pnpm install

# O con npm
npm install
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
pnpm run dev

# O con npm
npm run dev
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
pnpm run dev          # Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build para producción
pnpm run build        # Compilar para producción (tsc -b && vite build)
npm run build

# Preview build
pnpm run preview      # Vista previa del build
npm run preview

# Linting
pnpm run lint         # Ejecutar ESLint
npm run lint

# Instalación y desarrollo en un comando
pnpm run install-and-dev  # Instalar dependencias y ejecutar desarrollo
```

## 🏗️ Estructura del Proyecto

```
devsnap-web/
├── 📁 public/
│   ├── favicon.ico
│   ├── data/
│   │   └── devsnap-content.json
│   └── images/
├── 📁 src/
│   ├── 📁 components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── common/          # Componentes reutilizables (OptimizedImage, ClientLogo)
│   │   ├── specialties/     # Páginas de especialidades
│   │   ├── widgets/         # Widgets (WhatsApp)
│   │   ├── *Section.tsx     # Secciones principales (Hero, Services, etc.)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ErrorBoundary.tsx
│   ├── 📁 hooks/            # Custom React hooks
│   ├── 📁 lib/              # Utilidades (utils.ts)
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── 📁 dist/                 # Build de producción
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
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
pnpm install
code .
```

2. **Abrir terminal integrada en VS Code:** `Ctrl + `` (backtick)

3. **Iniciar desarrollo:**
```bash
pnpm run dev
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