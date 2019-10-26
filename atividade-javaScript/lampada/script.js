const lampada = document.getElementById('lampada');


let lampadaAcesa = false;

lampada.addEventListener('click', () => {
    if (lampadaAcesa) {
        lampada.src = 'image/lampada.jpg'
        lampadaAcesa = false;
    } else {
        lampada.src = 'image/lampada-on.jpg'
        lampadaAcesa = true;
    }
});

const hover = document.getElementById('hover');

lampadaHouver = false;

hover.addEventListener('mouseover', () => {
    if (lampadaHouver) {
        hover.src = 'image/lampada.jpg'
        lampadaHouver = false;
    } else {
        hover.src = 'image/lampada-on.jpg';
        lampadaHouver = true;
    }
});