// Objetivos
document.querySelectorAll('.objetivo').forEach(objetivo => {
    objetivo.addEventListener('click', function() {
        // Restablecemos todos los objetivos a su estado original
        document.querySelectorAll('.objetivo').forEach(obj => {
            obj.classList.remove('activo'); // Quitamos la clase "activo" de todos
        });

        // "activo" solo al objetivo clicado
        this.classList.add('activo');

        // Actualizamos el texto del objetivo seleccionado
        document.getElementById('texto-objetivo').textContent = this.dataset.texto;
    });
});


// Mapa refugios
// Inicializar el mapa centrado en España
var map = L.map('map').setView([40.4168, -3.7038], 6); // Madrid como centro

// Agregar el mapa base de Carto Light
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Lista de refugios de animales (ejemplos)
var refugios = [
    { "nombre": "Refugio Madrid", "lat": 40.4168, "lng": -3.7038 },
    { "nombre": "Refugio Barcelona", "lat": 41.3851, "lng": 2.1734 },
    { "nombre": "Refugio Sevilla", "lat": 37.3886, "lng": -5.9823 },
    { "nombre": "Refugio Valencia", "lat": 39.4699, "lng": -0.3763 },
    { "nombre": "Refugio Málaga", "lat": 36.7213, "lng": -4.4213 },
    { "nombre": "Refugio Bilbao", "lat": 43.263, "lng": -2.935 },
    { "nombre": "Refugio Zaragoza", "lat": 41.6488, "lng": -0.8891 },
    { "nombre": "Refugio Alicante", "lat": 38.3452, "lng": -0.481 },
    { "nombre": "Refugio Coruña", "lat": 43.3623, "lng": -8.4115 },
    { "nombre": "Refugio Murcia", "lat": 37.9922, "lng": -1.1307 },
    { "nombre": "Refugio Vigo", "lat": 42.2314, "lng": -8.7124 },
    { "nombre": "Refugio Granada", "lat": 37.1773, "lng": -3.5986 },
    { "nombre": "Refugio Palma", "lat": 39.5696, "lng": 2.6502 },
    { "nombre": "Refugio Pamplona", "lat": 42.8185, "lng": -1.6441 },
    { "nombre": "Refugio Santander", "lat": 43.4623, "lng": -3.8099 },
    { "nombre": "Refugio Valladolid", "lat": 41.6523, "lng": -4.7236 },
    { "nombre": "Refugio Castellón", "lat": 39.9863, "lng": -0.0513 },
    { "nombre": "Refugio Oviedo", "lat": 43.3619, "lng": -5.8494 },
    { "nombre": "Refugio Tarragona", "lat": 41.1189, "lng": 1.2445 },
    { "nombre": "Refugio Almería", "lat": 36.841, "lng": -2.449 },
    { "nombre": "Refugio Donostia", "lat": 43.3209, "lng": -1.9812 },
    { "nombre": "Refugio Badajoz", "lat": 38.8794, "lng": -6.9706 },
    { "nombre": "Refugio Salamanca", "lat": 40.9701, "lng": -5.6635 },
    { "nombre": "Refugio Huelva", "lat": 37.2614, "lng": -6.9447 },
    { "nombre": "Refugio Cádiz", "lat": 36.5164, "lng": -6.2996 },
    { "nombre": "Refugio León", "lat": 42.5987, "lng": -5.5671 },
    { "nombre": "Refugio Girona", "lat": 41.9794, "lng": 2.8214 },
    { "nombre": "Refugio Lugo", "lat": 43.012, "lng": -7.556 },
    { "nombre": "Refugio Ciudad Real", "lat": 38.9863, "lng": -3.9291 },
    { "nombre": "Refugio Toledo", "lat": 39.8628, "lng": -4.0273 },
    { "nombre": "Refugio Ourense", "lat": 42.335, "lng": -7.8633 },
    { "nombre": "Refugio Logroño", "lat": 42.462, "lng": -2.4456 },
    { "nombre": "Refugio Albacete", "lat": 38.9956, "lng": -1.8556 },
    { "nombre": "Refugio Teruel", "lat": 40.345, "lng": -1.106 },
    { "nombre": "Refugio Melilla", "lat": 35.2923, "lng": -2.9381 }
];

// Agregar marcadores de refugios
refugios.forEach(refugio => {
    L.marker([refugio.lat, refugio.lng])
        .addTo(map)
        .bindPopup(`<b>${refugio.nombre}</b>`);
});

//Like

function toggleLike(element) {
    element.classList.toggle("liked");
    element.innerHTML = element.classList.contains("liked") ? "&#9829;" : "&#9825;";
}

// Filtros
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("filtersModal");
    const openBtn = document.getElementById("openFilters");
    const openSearchBtn = document.getElementById("openFiltersSearch");
    const closeBtn = document.getElementById("closeFilters");

    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    openSearchBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
