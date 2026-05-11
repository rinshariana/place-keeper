'use strict'

// Create particle effect
const gParticleCount = 80;

// Create particles
function createParticles() {
    const elParticlesContainer = document.querySelector('.particles-container');
    const strHtml = []
    for (let i = 0; i < gParticleCount; i++) {

        const elParticle = `
            <div class="particle"
                style="
                    --size:${Math.random() * 4 + 1}px;
                    --start-x:${Math.random() * 100}%;
                    --start-y:${Math.random() * 100}%;
                    --move-x:${Math.random() * 40 - 20}px;
                    --move-y:-${Math.random() * 200 + 50}px;
                    --duration:${Math.random() * 10 + 10}s;
                    --delay:-${Math.random() * 20}s;
                    --opacity:${Math.random() * 0.3 + 0.1};
                "
            ></div>`
        strHtml.push(elParticle)
    }

    elParticlesContainer.innerHTML = strHtml.join('')
}

