'use strict'
const STORAGE_KEY = 'usersData_array'
const gUsers = loadFromStorage(STORAGE_KEY) || []

// Private

function _addUser(userData) {
    const user = {
        id: makeId(),
        ...userData
    }
    gUsers.push(user)
    _saveUsers()
}

function _saveUsers() {
    saveToStorage(STORAGE_KEY, gUsers)
}