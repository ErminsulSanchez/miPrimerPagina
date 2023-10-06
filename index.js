// Obtiene una referencia a todos los enlaces del menú de navegación
const links = document.querySelectorAll('nav a');

// Agrega un evento de clic a cada enlace del menú
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtiene el atributo href del enlace
        const targetId = link.getAttribute('href').substring(1);

        // Busca el elemento correspondiente al ID en el documento
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calcula la posición del elemento en la página
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            // Realiza un desplazamiento suave hacia la posición del elemento
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

