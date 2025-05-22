 const map = L.map('map').setView([52.3715, 16.9764], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([52.3715, 16.9764])
      .addTo(map)
      .bindPopup('<b>Skrzat Starołęka</b><br>ul. Książęca 15D')
      .openPopup();

    const products = [
      "Lalki i pluszaki",
      "Samochodziki Hot Wheels",
      "Gry edukacyjne i planszowe",
      "Klocki LEGO",
      "Zabawki sensoryczne",
      "Kreatywne zestawy DIY",
      "Zabawki dla niemowląt",
      "Artykuły szkolne",
      "Puzzle i układanki",
      "Zabawki z bajek: Psi Patrol, Barbie"
    ];

    const productsList = document.getElementById("products");
    products.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      productsList.appendChild(li);
    });