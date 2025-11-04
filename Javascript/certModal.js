// Modal para certificados
document.addEventListener('DOMContentLoaded', function() {
    try {
        const modal = document.getElementById('certModal');
        const modalTitle = document.getElementById('certModalTitle');
        const modalImage = document.getElementById('certModalImage');
        const modalPlaceholder = document.querySelector('.cert-modal-placeholder');
        const closeBtn = document.querySelector('.cert-modal-close');
        const modalBtns = document.querySelectorAll('.cert-modal-btn');

        if (!modal || !modalTitle || !modalImage || !modalPlaceholder || !closeBtn) {
            console.warn('Algunos elementos del modal no fueron encontrados');
            return;
        }

        function openModal(title, imagePath) {
            if (!title || !imagePath) {
                console.warn('Título o ruta de imagen no válidos');
                return;
            }

            modalTitle.textContent = title;
            
            const img = new Image();
            img.onload = function() {
                modalImage.src = imagePath;
                modalImage.style.display = 'block';
                modalPlaceholder.style.display = 'none';
            };
            img.onerror = function() {
                modalImage.style.display = 'none';
                modalPlaceholder.style.display = 'block';
            };
            img.src = imagePath;
            
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; 
            
            closeBtn.focus();
        }

        // Función para cerrar el modal
        function closeModal() {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto'; // Restaurar scroll
            modalImage.src = '';
        }

        modalBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const title = this.getAttribute('data-cert-title');
                const imagePath = this.getAttribute('data-cert-image');
                if (title && imagePath) {
                    openModal(title, imagePath);
                }
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

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
    } catch (error) {
        console.error('Error al inicializar el modal de certificados:', error);
    }
});