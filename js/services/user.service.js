'use strict'
const STORAGE_KEY = 'userData'
let gUser = loadFromStorage(STORAGE_KEY) || {name: 'Ariana'}

function getUser() {
    return gUser
}

// Private

function _addUser(userData) {
    const user = {
        id: makeId(),
        ...userData
    }
    gUser = user
    _saveUser()
}

function _saveUser() {
    saveToStorage(STORAGE_KEY, gUser)
}