// Script para navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Obtener todos los enlaces de navegación
        const navLinks = document.querySelectorAll('.navbar ul li a');
        
        // Obtener todas las secciones
        const sections = {
            'sobre-mi': document.querySelector('#sobre-mi')?.parentElement,
            'proyectos': document.querySelector('#proyectos'),
            'certificaciones': document.querySelector('#certificaciones')
        };
        
        // Verificar que las secciones existen
        const validSections = Object.fromEntries(
            Object.entries(sections).filter(([_, element]) => element !== null)
        );
        
        // Función para mostrar una sección específica
        function showSection(sectionId) {
            // Ocultar todas las secciones
            Object.values(validSections).forEach(section => {
                if (section) {
                    section.style.display = 'none';
                    section.classList.remove('active');
                }
            });
            
            // Mostrar la sección seleccionada
            if (validSections[sectionId]) {
                validSections[sectionId].style.display = 'flex';
                validSections[sectionId].classList.add('active');
            }
        }
        
        // Agregar event listeners a los enlaces
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); // Prevenir comportamiento por defecto
                
                // Obtener el ID de la sección desde el href
                const sectionId = this.getAttribute('href')?.substring(1);
                
                if (sectionId && validSections[sectionId]) {
                    // Mostrar la sección correspondiente
                    showSection(sectionId);
                    
                    // Actualizar enlaces activos
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
        
        // Mostrar la sección "sobre-mi" por defecto
        showSection('sobre-mi');
        
        // Marcar el primer enlace como activo
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    } catch (error) {
        console.error('Error al inicializar la navegación:', error);
    }
});