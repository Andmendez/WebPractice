// document.addEventListener("DOMContentLoaded", function() {
//     const navItems = document.querySelectorAll('.nav-item');

//     navItems.forEach(item => {
//         item.addEventListener('click', function(event) {
//             event.preventDefault(); // Evita el comportamiento predeterminado del enlace
//             navItems.forEach(item => item.classList.remove('active')); // Elimina la clase 'active' de todos los contenedores
//             this.classList.add('active'); // Agrega la clase 'active' al contenedor clicado
//         });
//     });
// });

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene todos los elementos con la clase 'nav-item'
    const navItems = document.querySelectorAll('.nav-item');

    // Itera sobre cada elemento de navegación
    navItems.forEach(function(item) {
        // Agrega un event listener para el evento 'click' a cada elemento
        item.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace (navegar a la página)
            event.preventDefault(); 

            // Elimina la clase 'active' de todos los elementos de navegación
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Agrega la clase 'active' al elemento de navegación actual
            this.classList.add('active');

            // Obtiene la URL de la página enlazada desde el atributo 'href' del enlace dentro del elemento de navegación actual
            const href = this.querySelector('a').getAttribute('href');

            // Navega a la página enlazada
            window.location.href = href;
        });
    });
});


