// Objetivos
document.querySelectorAll('.objetivo').forEach(objetivo => {
    objetivo.addEventListener('click', function() {
        document.getElementById('texto-objetivo').textContent = this.dataset.texto;
    });
});

// Mapa refugios
// Inicializar el mapa centrado en España
var map = L.map('map').setView([41.6017431, 2.270063299999947], 6); // Madrid como centro

// Agregar el mapa base de Carto Light
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 200
}).addTo(map);

// Lista de refugios de animales (ejemplos)
var refugios = [
    { "nombre": "Apag Granollers", "lat": 41.6017431, "lng": 2.270063299999947 },
];

// Agregar marcadores de refugios
refugios.forEach(refugio => {
    L.marker([refugio.lat, refugio.lng])
        .addTo(map)
        .bindPopup(`<b>${refugio.nombre}</b>`);
});

//Carrusel fichas