if (typeof bootstrap !== 'undefined') {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
}

// Para borrar formulario
if (typeof alertPlaceholder === 'undefined') {
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
}



if (typeof alertTrigger === 'undefined') {
    const alertTrigger = document.getElementById('liveAlertBtn');

    if (alertTrigger) {
        alertTrigger.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar que el formulario se envíe
            appendAlert('Nice, you triggered this alert message!', 'success');
        });
    }
}


// Formulario contacto

document.getElementById('liveAlertForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la manera convencional

    // Obtener los datos del formulario
    var formData = new FormData(event.target);

    // Convertir los datos a un objeto para facilitar la visualización
    var formObject = {};
    formData.forEach(function(value, key){
      formObject[key] = value;
    });

    // Mostrar los datos en la consola
    console.log(formObject);
});
        


