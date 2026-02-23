 // Datum
    document.getElementById("datum").textContent = new Date().toLocaleDateString("de-DE");

    // Slider-Funktion
    function slide(btn, richtung) {
        const container = btn.parentElement;
        const grund = container.querySelector('.grund');
        const inner = container.querySelector('.slider-inner');
        const karteBreite = 340;
        const maxScroll = grund.scrollWidth - inner.offsetWidth;

        const style = window.getComputedStyle(grund);
        const matrix = new DOMMatrix(style.transform);
        let aktuellePosition = matrix.m41;

        aktuellePosition += richtung * -karteBreite;

        if (aktuellePosition > 0) aktuellePosition = 0;
        if (aktuellePosition < -maxScroll) aktuellePosition = -maxScroll;

        grund.style.transform = `translateX(${aktuellePosition}px)`;

        const btnLinks = container.querySelector('.links');
        const btnRechts = container.querySelector('.rechts');
        btnLinks.disabled = (aktuellePosition >= 0);
        btnRechts.disabled = (aktuellePosition <= -maxScroll);
    }

    // Navigation verstecken/zeigen
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('versteckt');
        } else {
            nav.classList.remove('versteckt');
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 60) {
            nav.classList.remove('versteckt');
        }
    });

    nav.addEventListener('mouseleave', function() {
        if (window.scrollY > 100) {
            nav.classList.add('versteckt');
        }
    });