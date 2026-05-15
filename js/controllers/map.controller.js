'use strict'

let map

function onInit() {
    renderParticles()
}

async function initMap() {
    const { ColorScheme } = await google.maps.importLibrary("core")

    const mapOptions = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        colorScheme: ColorScheme.DARK,
    }
    map = new google.maps.Map(document.querySelector('.map'), mapOptions);
}