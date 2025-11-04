# 🚀 Portfolio Personal - Andrés Felipe Plazas Mendivelso

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

## 📋 Descripción

Portfolio personal interactivo de Andrés Felipe Plazas Mendivelso, estudiante de Ingeniería de Sistemas en la Universidad de Boyacá y desarrollador junior especializado en tecnologías web.

## ✨ Características

- **Diseño Responsive**: Adaptado para dispositivos móviles, tabletas y escritorio
- **Navegación Intuitiva**: Sistema de navegación SPA (Single Page Application)
- **Modal Interactivo**: Visualización de certificados y títulos
- **Animaciones Suaves**: Efectos visuales optimizados para la experiencia del usuario
- **Accesibilidad**: Cumple con estándares WCAG 2.1 para accesibilidad web
- **SEO Optimizado**: Meta tags y estructura semántica optimizada

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox, Grid y animaciones
- **JavaScript ES6+**: Funcionalidades interactivas
- **Google Fonts**: Tipografía Oswald

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **VS Code**: Editor de código
- **Browser DevTools**: Debugging y testing

## 📁 Estructura del Proyecto

```
Mi_Portafolio_2025/
├── index.html              # Página principal
├── README.md               # Documentación del proyecto
├── assets/                 # Recursos multimedia
│   ├── certificates/       # Certificados y títulos
│   ├── *.png              # Iconos de tecnologías
│   ├── *.jpeg             # Imágenes y fotos
│   └── *.mp4              # Video de fondo
├── Javascript/             # Scripts del cliente
│   ├── certModal.js       # Modal de certificados
│   ├── navigation.js      # Sistema de navegación
│   ├── tooltips.js        # Tooltips personalizados
│   └── wordAnimation.js   # Animaciones de texto
└── styles/
    └── styles.css         # Estilos CSS principales
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación
1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/AndresPlazas10/Mi_Portafolio_2025.git
   cd Mi_Portafolio_2025
   ```

2. **Abrir en navegador**
   - Opción 1: Abrir `index.html` directamente en el navegador
   - Opción 2: Usar un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (live-server)
     npx live-server
     
     # Con PHP
     php -S localhost:8000
     ```

3. **Acceder al portfolio**
   - URL local: `http://localhost:8000`
   - O directamente desde el archivo local

## 🎯 Funcionalidades

### Navegación
- **Sobre mí**: Información personal y profesional
- **Proyectos**: Showcase de proyectos desarrollados
- **Certificaciones**: Títulos y certificaciones obtenidas

### Interacciones
- **Navegación SPA**: Cambio dinámico entre secciones
- **Modal de Certificados**: Visualización ampliada de documentos
- **Tooltips**: Información adicional en iconos de tecnología
- **Enlaces Externos**: Acceso directo a GitHub y LinkedIn

## 📱 Responsive Design

El portfolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tabletas**: 768px - 1024px
- **Escritorio**: 1024px+

### Breakpoints
```css
/* Tabletas */
@media (max-width: 768px) { ... }

/* Móviles */
@media (max-width: 480px) { ... }
```

## ♿ Accesibilidad

- **ARIA Labels**: Etiquetas descriptivas para lectores de pantalla
- **Navegación por Teclado**: Soporte completo para navegación con teclado
- **Contraste**: Cumple con ratios WCAG AA
- **Semántica HTML**: Estructura HTML5 semánticamente correcta
- **Reducción de Movimiento**: Respeta las preferencias del usuario

## 🔧 Personalización

### Colores
```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #007acc;
  --text-color: #ffffff;
  --background-overlay: rgba(0, 0, 0, 0.3);
}
```

### Fuentes
- **Principal**: Oswald (Google Fonts)
- **Fallback**: System fonts

## 📊 Performance

### Optimizaciones Aplicadas
- **CSS Optimizado**: Selectores eficientes y código limpio
- **JavaScript Lazy Loading**: Scripts con atributo `defer`
- **Imágenes Optimizadas**: Formatos web-friendly
- **Código Minificado**: Listo para producción

### Métricas de Rendimiento
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Deploy

### Netlify
1. Conectar repositorio de GitHub
2. Configurar build settings:
   - Build command: `# No build needed`
   - Publish directory: `/`

### GitHub Pages
1. Ir a Settings > Pages
2. Seleccionar branch `main`
3. Carpeta raíz `/`

### Vercel
```bash
npx vercel --prod
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Andrés Felipe Plazas Mendivelso**

- **GitHub**: [@AndresPlazas10](https://github.com/AndresPlazas10)
- **LinkedIn**: [Andrés Felipe Plazas](https://www.linkedin.com/in/plazas-mendivelso-andrés-felipe-b122b7309)
- **Universidad**: Universidad de Boyacá
- **Semillero**: SYSDITEL - Facultad de Ciencias e Ingeniería

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

## 🔄 Changelog

### v2.0.0 (2025-11-03)
- ✨ Estructura HTML semántica mejorada
- 📱 Responsive design completamente optimizado
- ♿ Mejoras significativas de accesibilidad
- 🚀 JavaScript optimizado con manejo de errores
- 🎨 CSS reorganizado y optimizado
- 📝 Documentación completa

### v1.0.0 (2025-09-25)
- 🎉 Lanzamiento inicial del portfolio
- 🏗️ Estructura básica implementada
- 🎨 Diseño visual inicial
Este es mi portafolio web al dia 25/09/2025
