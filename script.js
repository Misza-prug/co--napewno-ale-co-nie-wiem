const button = document.getElementById('actionBtn');
const heartsContainer = document.querySelector('.hearts');

// Funkcja do tworzenia serduszka
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heartsContainer.appendChild(heart);

    // Usuń serduszko po zakończeniu animacji
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Obsługa kliknięcia przycisku
button.addEventListener('click', () => {
    // Zmiana tekstu przycisku
    button.textContent = button.textContent === 'Wyślij miłość!' ? 'Wysłano!' : 'Wyślij miłość!';

    // Efekt kliknięcia
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);

    // Stwórz 3 serduszka
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 200);
    }
});
function downloadCard() {
    html2canvas(document.querySelector('.card')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'kartka_dla_mamy.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
