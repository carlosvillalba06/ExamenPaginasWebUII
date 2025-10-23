const inputTitulo = document.querySelector("#tituloTarea");
const inputFecha = document.querySelector("#fechaLimite");
const btnAgregar = document.querySelector("#agregarBoton");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");

lista.innerHTML = localStorage.getItem('lista') || '';

function obtenerPrioridadSeleccionada() {
    const radioSeleccionado = document.querySelector('input[name="prioridad"]:checked');
    return radioSeleccionado ? radioSeleccionado.value : '';
}

btnAgregar.addEventListener('click', () => {

    const textoTitulo = inputTitulo.value.trim();
    const textoFecha = inputFecha.value;
    const prioridad = obtenerPrioridadSeleccionada();

    if(textoTitulo !== '' && textoFecha !== '' && prioridad !== ''){
        
        const contenidoTarea = `Título: ${textoTitulo} | Fecha Límite: ${textoFecha} | Prioridad: ${prioridad}`;
        
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = contenidoTarea;
        
        nuevaTarea.classList.add(`prioridad-${prioridad.toLowerCase()}`);

        lista.appendChild(nuevaTarea);

        localStorage.setItem('lista', lista.innerHTML);
        
        inputTitulo.value = '';
        inputFecha.value = '';
        const radios = document.querySelectorAll('input[name="prioridad"]');
        radios.forEach(radio => radio.checked = false);
        mensaje.textContent = '';


    } else {
        mensaje.textContent = 'Por favor, completa el título, la fecha y selecciona una prioridad.';
    }
    
});


