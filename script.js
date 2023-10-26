const container = document.getElementById('pixelated-container');

function createRandomSparkles() {
    for (let i = 0; i < 400; i++) { 
        const square = document.createElement('div');
        square.classList.add('pixelated-square');
        square.style.animationDelay = `${Math.random() * 10}s`; 

        container.appendChild(square);
    }
}

createRandomSparkles();
