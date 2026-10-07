const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

const totalTareas = document.getElementById('totalTareas');
const completadasTareas = document.getElementById('completadasTareas');
const pendientesTareas = document.getElementById('pendientesTareas');

function actualizarContadores() {
  const todas = listaTareas.querySelectorAll('li').length;
  const completadas = listaTareas.querySelectorAll('.check-completado:checked').length;
  const pendientes = todas - completadas;

  totalTareas.textContent = todas;
  completadasTareas.textContent = completadas;
  pendientesTareas.textContent = pendientes;
}

function agregarTarea() {
  const texto = inputTarea.value.trim();

  if (texto === '') {
    alert('Por favor escribe una tarea antes de agregar.');
    return;
  }

  const li = document.createElement('li');
  li.className = 'item-tarea';

  li.innerHTML = `
    <button class="btn-eliminar">✕</button>
    <span class="texto-tarea">${texto}</span>
    <input type="checkbox" class="check-completado">
  `;

  // Borrar tarea
  li.querySelector('.btn-eliminar').addEventListener('click', () => {
    li.remove();
    actualizarContadores();
  });

  li.querySelector('.check-completado').addEventListener('change', () => {
    actualizarContadores();
  });

  listaTareas.appendChild(li);
  inputTarea.value = '';
  actualizarContadores();
}

btnAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});