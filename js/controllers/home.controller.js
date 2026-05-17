'use strict'

function onInit() {
    renderParticles()
    renderHero()
}

function renderHero() {
    const elUserName = document.querySelector('.hero span')
    const {name} = getUser()
    elUserName.innerText = name
}