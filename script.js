//alert("HOLA MUNDOOOOOOOOOOOO <3");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1500)
    .typeString('Daniela Sanchez')
    .pauseFor(300)
    .deleteChars(15)
    .typeString('Desarrolladora FRONTEND JR')
    .pauseFor(1000)
    .start();


let audioElement; // Variable para almacenar el objeto Audio

const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>

mainElement.addEventListener('click', function () {
    if (!audioElement) {
        audioElement = new Audio('assets/music/loveit.mp3');
        audioElement.volume = 0.1;
    }
    audioElement.play();
});

const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
        pauseButton.textContent = "Pausar";
    } else {
        audioElement.pause();
        pauseButton.textContent = "Reanudar";
    }
});

async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar:', err);
    }
}