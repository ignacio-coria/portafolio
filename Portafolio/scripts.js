// scripts.js

// Agregar un estilo especial al pasar el mouse sobre los elementos de la lista de hobbies
const hobbyItems = document.querySelectorAll('#hobbies li');

hobbyItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.fontWeight = 'bold';
    });

    item.addEventListener('mouseout', () => {
        item.style.fontWeight = 'normal';
    });
});
