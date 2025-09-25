// Tooltip personalizado para iconos de tecnología
document.addEventListener('DOMContentLoaded', function() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        // Crear el elemento tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = icon.getAttribute('title');
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
            pointer-events: none;
            transform: translateX(-50%);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        
        // Agregar tooltip al body
        document.body.appendChild(tooltip);
        
        // Remover el title original para evitar conflictos
        icon.removeAttribute('title');
        
        // Eventos de mouse
        icon.addEventListener('mouseenter', function(e) {
            const rect = icon.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 + 'px';
            tooltip.style.top = rect.top - 45 + 'px';
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });
        
        icon.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });
});