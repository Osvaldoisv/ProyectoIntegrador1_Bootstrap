// esto es para tarjeta emergente y vaciar formulario al darle submit

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const emailHelpText = document.getElementById('exampleInputEmail1');
const textArea = document.getElementById("exampleFormControlTextarea1");

const appendAlert = (message, type) => {
  emailHelpText.value = '';
  textArea.value = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);

  // Agregar evento de clic al botón de cierre
  const closeButton = wrapper.querySelector('.btn-close');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      wrapper.remove();
    });
  }
};

document.getElementById('liveAlertForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío convencional del formulario

    // Obtener los datos del formulario
    const formData = new FormData(event.target);
    

    // Crear una instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configurar la solicitud
    xhr.open('POST', 'http://127.0.0.1:5501/secciones/contacto.html', true);

    // Configurar el evento de carga
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        // Éxito en la solicitud, mostrar el mensaje de éxito
        document.getElementById('mensajeExito').style.display = 'block';
      } else {
        // Error en la solicitud
        console.log(textArea.value);
        console.error('Error en la solicitud:', xhr.statusText);
      }
    };

    // Configurar el evento de error
    xhr.onerror = function() {
      console.error('Error en la solicitud:', xhr.statusText);
    };

    // Enviar los datos del formulario
    xhr.send(formData);
  });



