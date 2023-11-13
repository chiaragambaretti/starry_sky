document.addEventListener('DOMContentLoaded', function () {
    createStars();
    lightUpRandomStars();
});

function createStars() {
    const numberOfStars = 100; // Numero di stelle
    const sky = document.querySelector('.starry-sky');

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; // durata animazione
        star.style.animationDelay = `-${Math.random()}s`; // Delay casuale
        sky.appendChild(star);
    }
}

function lightUpRandomStars() {
    const stars = document.querySelectorAll('.star');
    const numberOfStarsToLightUp = 40; // Numero di stelle da illuminare

    for (let i = 0; i < numberOfStarsToLightUp; i++) {
        const randomIndex = Math.floor(Math.random() * stars.length);
        stars[randomIndex].classList.add('illuminated');
    }
}
