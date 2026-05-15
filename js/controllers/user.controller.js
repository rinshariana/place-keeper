'use strict'
function onInit() {
    renderParticles()
}

function onSubmit(ev) {
    ev.preventDefault()

    const formData = new FormData(ev.target)
    const userData = Object.fromEntries(formData)

    _addUser(userData)
}