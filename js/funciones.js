function saludar(){
    const titulo = document.getElementById('titulo1');
    titulo.textContent = 'Nuevo Título Modificado';

    const parrafo = document.getElementById('parrafo1');
    parrafo.textContent = '<h1>titulo con innerhtml</h1><p>parrafo con innerhtml</p>';//nofunciona debe agregar solo texto
}

function cambiarDiv(){
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h1>titulo con innerhtml</h1><p>parrafo con innerhtml</p>';
    contenido.style.backgroundColor = 'blue';
    const enlace = document.querySelector('a');
    enlace.setAttribute('href', 'https://www.google.com');
}

function agregarElemento(){
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo DIV';
    const contenido = document.getElementById('contenido');
    contenido.appendChild(nuevoDiv);
}
