'use strict'
const STORAGE_KEY = 'usersData_array'
const gPlaces = [{id: '1p2', lat: 32.1416, lng: 34.831213, name: 'Pukis house'}]

function getPlaces() {
    return gPlaces
} 

function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => placeId === place.id)
    gPlaces.splice(placeIdx, 1)
    _savePlacesToStorage()
} 

function addPlace(name, lat, lng, zoom) {

} 

function getPlaceById(placeId) {
    return gPlaces.find(place => placeId === place.id)
} 

function _createPlaces(name, lat, lng, zoom) {

} 

function _createPlace(name, lat, lng) {
    return {
        id: makeId(),
        name,
        lat,
        lng
    }
}