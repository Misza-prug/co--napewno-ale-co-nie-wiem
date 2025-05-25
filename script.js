
function createFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.style.left = Math.random() * window.innerWidth + 'px';
      const duration = Math.random() * 4 + 4; // Losowy czas animacji od 4 do 8 sekund
      flower.style.animation = `fall ${duration}s linear`;
      document.body.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, duration * 1000);
    }

    setInterval(createFlower, 300); // Tworzenie kwiatów co 300ms dla większej gęstości