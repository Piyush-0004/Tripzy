var map = L.map('map').setView([28.6139, 77.2088], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([28.6139, 77.2088]).addTo(map)       //lat lng
    .bindPopup("exact location will be provided after booking")
    .openPopup();

   