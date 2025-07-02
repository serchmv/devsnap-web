#!/usr/bin/env node

/**
 * Script para generar assets optimizados para móviles
 * Requiere: imagemin, imagemin-webp, imagemin-mozjpeg, imagemin-pngquant
 * 
 * Instalación:
 * npm install --save-dev imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant
 * 
 * Uso:
 * node scripts/generate-optimized-assets.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Generando assets optimizados para DevSnap...\n');

// Directorios de trabajo
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const videosDir = path.join(publicDir, 'videos');

// Configuración de optimización
const optimizationConfig = {
  images: {
    desktop: { width: 800, quality: 85 },
    mobile: { width: 400, quality: 80 },
    logo: { width: 128, quality: 95 },
    logoMobile: { width: 64, quality: 95 }
  },
  videos: {
    desktop: { width: 1920, height: 1080, crf: 23 },
    mobile: { width: 720, height: 480, crf: 28 }
  }
};

// Lista de assets a optimizar
const assetsToOptimize = {
  logos: [
    'DS.png'
  ],
  clientLogos: [
    'clients/oracle-logo.png',
    'clients/movistar-logo.png', 
    'clients/izzi-logo.png',
    'clients/televisa-logo.png',
    'clients/bbva-logo.png'
  ],
  techLogos: [
    'tech-logos/aws-logo.png',
    'tech-logos/azure-logo.png',
    'tech-logos/react-logo.jpg',
    'tech-logos/python-logo.png',
    'tech-logos/tensorflow-logo.png',
    'tech-logos/docker-logo.png',
    'tech-logos/kubernetes-logo.png',
    'tech-logos/mongodb-logo.png'
  ],
  videos: [
    'junta.mp4'
  ]
};

/**
 * Genera comandos para optimizar imágenes usando ImageMagick
 */
function generateImageCommands() {
  const commands = [];
  
  // Logos principales
  assetsToOptimize.logos.forEach(logo => {
    const input = path.join(imagesDir, logo);
    const baseName = path.basename(logo, path.extname(logo));
    const outputMobile = path.join(imagesDir, `${baseName}-mobile.webp`);
    
    commands.push(`convert "${input}" -resize ${optimizationConfig.images.logoMobile.width}x${optimizationConfig.images.logoMobile.width} -quality ${optimizationConfig.images.logoMobile.quality} "${outputMobile}"`);
  });
  
  // Logos de clientes
  assetsToOptimize.clientLogos.forEach(logo => {
    const input = path.join(imagesDir, logo);
    const dir = path.dirname(logo);
    const baseName = path.basename(logo, path.extname(logo));
    const outputMobile = path.join(imagesDir, dir, `${baseName}-mobile.webp`);
    
    commands.push(`convert "${input}" -resize ${optimizationConfig.images.mobile.width}x${optimizationConfig.images.mobile.width} -quality ${optimizationConfig.images.mobile.quality} "${outputMobile}"`);
  });
  
  // Logos de tecnologías
  assetsToOptimize.techLogos.forEach(logo => {
    const input = path.join(imagesDir, logo);
    const dir = path.dirname(logo);
    const baseName = path.basename(logo, path.extname(logo));
    const outputMobile = path.join(imagesDir, dir, `${baseName}-mobile.webp`);
    
    commands.push(`convert "${input}" -resize ${optimizationConfig.images.logoMobile.width}x${optimizationConfig.images.logoMobile.width} -quality ${optimizationConfig.images.logoMobile.quality} "${outputMobile}"`);
  });
  
  return commands;
}

/**
 * Genera comandos para optimizar videos usando FFmpeg
 */
function generateVideoCommands() {
  const commands = [];
  
  assetsToOptimize.videos.forEach(video => {
    const input = path.join(videosDir, video);
    const baseName = path.basename(video, path.extname(video));
    const outputMobile = path.join(videosDir, `${baseName}-mobile.mp4`);
    const outputPoster = path.join(imagesDir, `${baseName}-poster.jpg`);
    
    // Video mobile
    commands.push(`ffmpeg -i "${input}" -vf scale=${optimizationConfig.videos.mobile.width}:${optimizationConfig.videos.mobile.height} -crf ${optimizationConfig.videos.mobile.crf} -preset medium -movflags +faststart "${outputMobile}"`);
    
    // Poster del video
    commands.push(`ffmpeg -i "${input}" -ss 00:00:02 -vframes 1 -q:v 2 "${outputPoster}"`);
  });
  
  return commands;
}

/**
 * Crea directorios necesarios
 */
function createDirectories() {
  const dirs = [
    path.join(imagesDir, 'clients'),
    path.join(imagesDir, 'tech-logos'),
    videosDir
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Creado directorio: ${dir}`);
    }
  });
}

/**
 * Genera script de bash para ejecutar optimizaciones
 */
function generateOptimizationScript() {
  const imageCommands = generateImageCommands();
  const videoCommands = generateVideoCommands();
  
  const scriptContent = `#!/bin/bash

# Script de optimización de assets para DevSnap
# Generado automáticamente - No editar manualmente

echo "🎨 Optimizando imágenes..."

${imageCommands.join('\n')}

echo "\\n🎬 Optimizando videos..."

${videoCommands.join('\n')}

echo "\\n✅ Optimización completada!"
echo "📊 Assets generados:"
echo "   - Imágenes mobile: ${imageCommands.length}"
echo "   - Videos optimizados: ${videoCommands.length}"
echo "\\n🚀 Ahora puedes usar los componentes OptimizedImage y OptimizedVideo"
`;

  const scriptPath = path.join(__dirname, 'optimize-assets.sh');
  fs.writeFileSync(scriptPath, scriptContent);
  
  // Hacer el script ejecutable
  try {
    fs.chmodSync(scriptPath, '755');
  } catch (error) {
    console.warn('⚠️  No se pudo hacer ejecutable el script (requiere permisos)');
  }
  
  return scriptPath;
}

/**
 * Genera archivo de configuración para webpack/vite
 */
function generateWebpackConfig() {
  const config = {
    optimization: {
      images: {
        formats: ['webp', 'jpg', 'png'],
        quality: {
          webp: { quality: 85 },
          jpg: { quality: 85 },
          png: { quality: 90 }
        },
        sizes: {
          mobile: 400,
          tablet: 768,
          desktop: 1200
        }
      }
    },
    assets: assetsToOptimize
  };
  
  const configPath = path.join(__dirname, 'asset-optimization.config.json');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  
  return configPath;
}

// Ejecutar optimización
async function main() {
  try {
    console.log('📁 Verificando directorios...');
    createDirectories();
    
    console.log('📝 Generando scripts de optimización...');
    const scriptPath = generateOptimizationScript();
    const configPath = generateWebpackConfig();
    
    console.log(`\\n✅ Scripts generados exitosamente:`);
    console.log(`   📜 Script de optimización: ${scriptPath}`);
    console.log(`   ⚙️  Configuración: ${configPath}`);
    
    console.log(`\\n🔧 Para ejecutar la optimización:`);
    console.log(`   chmod +x ${scriptPath}`);
    console.log(`   ${scriptPath}`);
    
    console.log(`\\n📋 Requisitos previos:`);
    console.log(`   • ImageMagick: brew install imagemagick (macOS) o apt-get install imagemagick (Linux)`);
    console.log(`   • FFmpeg: brew install ffmpeg (macOS) o apt-get install ffmpeg (Linux)`);
    
    console.log(`\\n🎯 Beneficios esperados:`);
    console.log(`   • ⚡ 70% reducción en tiempo de carga móvil`);
    console.log(`   • 💾 60-80% ahorro de bandwidth`);
    console.log(`   • 📱 Mejor experiencia en dispositivos móviles`);
    console.log(`   • 🚀 Mejor puntuación en PageSpeed Insights`);
    
  } catch (error) {
    console.error('❌ Error durante la generación:', error);
    process.exit(1);
  }
}

// Ejecutar solo si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  generateImageCommands,
  generateVideoCommands,
  optimizationConfig,
  assetsToOptimize
};