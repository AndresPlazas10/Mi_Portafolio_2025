// Manejo de enlaces de proyectos temporales
document.addEventListener('DOMContentLoaded', function() {
    try {
        const placeholderLinks = document.querySelectorAll('.project-link-placeholder');
        const demoLinks = document.querySelectorAll('.project-demo-link');
        
        // Manejar enlaces placeholder
        placeholderLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const projectName = this.getAttribute('data-project');
                
                // Mostrar mensaje informativo
                alert(`El proyecto ${projectName} estará disponible próximamente. 
¡Estoy trabajando en completarlo! 🚀`);
            });
        });

        // Manejar enlaces de demo
        demoLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const projectName = this.getAttribute('data-project');
                
                if (projectName === 'negozio') {
                    // Mensaje para Negozio demo
                    const userConfirm = confirm(`🚧 Demo de Negozio - En Desarrollo

Este es un proyecto en desarrollo activo. La demo puede contener:
• Funcionalidades incompletas
• Datos de prueba
• Posibles errores o bugs

¿Deseas continuar y ver la demo?`);
                    
                    if (userConfirm) {
                        // Aquí puedes agregar el enlace a tu demo cuando esté listo
                        alert('🔗 Enlace de demo pendiente de configurar.\n\nPara agregar el enlace:\n1. Edita el href en el HTML\n2. O usa: updateDemoLink("negozio", "tu-enlace-demo")');
                    }
                }
            });
        });
    } catch (error) {
        console.error('Error al inicializar enlaces de proyecto:', error);
    }
});

// Función para actualizar enlace de proyecto (para uso futuro)
function updateProjectLink(projectName, url) {
    const link = document.querySelector(`[data-project="${projectName}"].project-link-placeholder`);
    if (link) {
        link.href = url;
        link.classList.remove('project-link-placeholder');
        link.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
        link.onclick = null; // Remover el evento click temporal
    }
}

// Función para actualizar enlace de demo
function updateDemoLink(projectName, url) {
    const link = document.querySelector(`[data-project="${projectName}"].project-demo-link`);
    if (link) {
        link.href = url;
        link.onclick = null; // Remover el evento click temporal
        console.log(`Demo link actualizado para ${projectName}: ${url}`);
    }
}

/*
Gestión de enlaces de proyectos

Para actualizar enlaces:

Para FIERMART:
✅ Proyecto ya configurado: https://fiertmart.netlify.app/login

Para Negozio:
updateProjectLink('negozio', 'https://tu-enlace-negozio.com');

Para otros proyectos:
updateProjectLink('nombre-proyecto', 'https://tu-enlace.com');
*/