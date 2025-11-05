 // Aquí tu código
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

boton.addEventListener('click', function () {
  const nombre = prompt('Introduce tu nombre:');
  const ciudad = prompt('Introduce tu ciudad:');
  const edad = prompt('Introduce tu edad:');
  const profesion = prompt('Introduce tu profesión:');

  const nuevoElemento = document.createElement('li');
  nuevoElemento.classList.add('card');
  nuevoElemento.innerHTML = `
        <h3><strong>Nombre:</strong> ${nombre}</h3>
        <p><strong>Ciudad:</strong> ${ciudad}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Profesión:</strong> ${profesion}</p>
    `;
    lista.appendChild(nuevoElemento);
});
