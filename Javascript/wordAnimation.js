// Script para envolver cada palabra en spans y crear efecto hover
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los párrafos que queremos animar
    const paragraphs = document.querySelectorAll('#sobre-mi p');
    
    paragraphs.forEach(paragraph => {
        // Obtener el texto del párrafo
        const text = paragraph.textContent;
        
        // Dividir el texto en palabras
        const words = text.split(' ');
        
        // Limpiar el contenido del párrafo
        paragraph.innerHTML = '';
        
        // Crear un span para cada palabra
        words.forEach((word, index) => {
            if (word.trim() !== '') {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                wordSpan.textContent = word;
                
                paragraph.appendChild(wordSpan);
                
                // Agregar espacio después de cada palabra (excepto la última)
                if (index < words.length - 1) {
                    paragraph.appendChild(document.createTextNode(' '));
                }
            }
        });
    });
    
    // También aplicar el efecto a los títulos h1 y h2
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        const text = title.textContent;
        const words = text.split(' ');
        title.innerHTML = '';
        
        words.forEach((word, index) => {
            if (word.trim() !== '') {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word';
                wordSpan.textContent = word;
                
                title.appendChild(wordSpan);
                
                if (index < words.length - 1) {
                    title.appendChild(document.createTextNode(' '));
                }
            }
        });
    });
});