'use strict'

let gMap
let gMarkers

function onInit() {
    renderParticles()
    renderPlaces()
}

function renderPlaces() {
    const elList = document.querySelector('.places-list')

    const strHtml = getPlaces().map(({ id, name }) => {
        return `<li>${name}
            <button onclick="onPlaceRemove('${id}')">X</button>
            <button onclick="onPanToPlace('${id}')">go</button>
        </li>`
    })

    elList.innerHTML = strHtml.join('')
}

window.initMap = async function initMap() {
    const { ColorScheme } = await google.maps.importLibrary("core")

    const mapOptions = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        colorScheme: ColorScheme.DARK,
    }
    
    gMap = new google.maps.Map(document.querySelector('.map'), mapOptions);

    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
    })
}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
} 

function renderMarkers() { 
    const places = getPlaces() 
    // remove previous markers 
    gMarkers.forEach(marker => marker.setMap(null)) 
    // every place is creating a marker 
    gMarkers = places.map(place => { 
        return new google.maps.Marker({ 
            position: place, 
            map: gMap, 
            title: place.name 
        }) 
    }) 
}