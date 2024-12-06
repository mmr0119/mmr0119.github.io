document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;

    function moveSlide(direction) {
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;

        // Calcular nueva posición del slide
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

        // Mover las diapositivas
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Vincular botones a la función
    document.querySelector('.botonAtras').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.botonSiguiente').addEventListener('click', () => moveSlide(1));
});
