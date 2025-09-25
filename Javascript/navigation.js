// Script para navegación entre secciones
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    // Obtener todas las secciones
    const sections = {
        'sobre-mi': document.querySelector('#sobre-mi').parentElement,
        'proyectos': document.querySelector('#proyectos'),
        'certificaciones': document.querySelector('#certificaciones')
    };
    
    // Función para mostrar una sección específica
    function showSection(sectionId) {
        // Ocultar todas las secciones
        Object.values(sections).forEach(section => {
            if (section) {
                section.style.display = 'none';
                section.classList.remove('active');
            }
        });
        
        // Mostrar la sección seleccionada
        if (sections[sectionId]) {
            sections[sectionId].style.display = 'flex';
            sections[sectionId].classList.add('active');
        }
    }
    
    // Agregar event listeners a los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento por defecto
            
            // Obtener el ID de la sección desde el href
            const sectionId = this.getAttribute('href').substring(1);
            
            // Mostrar la sección correspondiente
            showSection(sectionId);
            
            // Actualizar enlaces activos
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Mostrar la sección "sobre-mi" por defecto
    showSection('sobre-mi');
    
    // Marcar el primer enlace como activo
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});