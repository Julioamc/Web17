document.addEventListener('DOMContentLoaded', function () {
  const newTopicForm = document.getElementById('new-topic-form');
  const topicsList = document.getElementById('topics-list');

  function publishNewTopic(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del título y el contenido del tema
    const topicTitleInput = document.getElementById('topic-title'); // Obtener el título del tema dentro de la función
    const topicContentTextarea = document.getElementById('topic-content'); // Obtener el contenido del tema dentro de la función
    const title = topicTitleInput.value;
    const content = topicContentTextarea.value;

    // Crear elementos para mostrar el nuevo tema
    const topicContainer = document.createElement('div');
    topicContainer.classList.add('topic');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    // Agregar elementos al contenedor del tema
    topicContainer.appendChild(titleElement);
    topicContainer.appendChild(contentElement);

    // Agregar el tema al listado de temas
    topicsList.appendChild(topicContainer);

    // Limpiar los campos del formulario
    topicTitleInput.value = '';
    topicContentTextarea.value = '';
  }

  // Agregar un event listener al formulario para capturar el evento de submit
  newTopicForm.addEventListener('submit', publishNewTopic);
});
