'use strict';

if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
        function (position) {
            
            const {latitude} = position.coords;

            const {longitude} = position.coords;
          
            const coords = [latitude, longitude];
            const map = L.map('map').setView(coords, 13);

            L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker(coords).addTo(map)
                .bindPopup(`Ваши координаты:<br>${latitude}, ${longitude}`)
                .openPopup();
        },
        function () {
            alert('Невозможно получить местоположение!');
        }
    );

}

//styles maps
//https://leaflet-extras.github.io/leaflet-providers/preview/










