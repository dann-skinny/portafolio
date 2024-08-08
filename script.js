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

const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>

async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar:', err);
    }
}