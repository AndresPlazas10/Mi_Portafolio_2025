// Modal para certificados
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certModal');
    const modalTitle = document.getElementById('certModalTitle');
    const modalImage = document.getElementById('certModalImage');
    const modalPlaceholder = document.querySelector('.cert-modal-placeholder');
    const closeBtn = document.querySelector('.cert-modal-close');
    const modalBtns = document.querySelectorAll('.cert-modal-btn');

    // Función para abrir el modal
    function openModal(title, imagePath) {
        modalTitle.textContent = title;
        
        // Verificar si existe la imagen
        const img = new Image();
        img.onload = function() {
            // La imagen existe, mostrarla
            modalImage.src = imagePath;
            modalImage.style.display = 'block';
            modalPlaceholder.style.display = 'none';
        };
        img.onerror = function() {
            // La imagen no existe, mostrar placeholder
            modalImage.style.display = 'none';
            modalPlaceholder.style.display = 'block';
        };
        img.src = imagePath;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
        modalImage.src = '';
    }

    // Event listeners para los botones de certificados
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('data-cert-title');
            const imagePath = this.getAttribute('data-cert-image');
            openModal(title, imagePath);
        });
    });

    // Event listener para cerrar el modal
    closeBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer click fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});