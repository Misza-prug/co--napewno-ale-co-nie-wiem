
const flowerImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Cherry_blossoms_in_Kagoshima_001.jpg/50px-Cherry_blossoms_in_Kagoshima_001.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/White_Daisy.JPG/50px-White_Daisy.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Pink_rose_flower.jpg/50px-Pink_rose_flower.jpg'
];

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  const size = 30 + Math.random() * 30;
  flower.style.width = size + 'px';
  flower.style.height = size + 'px';
  flower.style.opacity = Math.random();
  flower.style.animationDuration = (6 + Math.random() * 4) + 's, 3s';
  flower.style.animationDelay = '0s, ' + (Math.random() * 2) + 's';
  flower.style.backgroundImage = `url(${flowerImages[Math.floor(Math.random() * flowerImages.length)]})`;

  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 12000);
}

setInterval(createFlower, 250);

function downloadCard() {
  const card = document.getElementById('card-content');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'kartka_dzien_matki.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

