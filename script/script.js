// script.js
document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popupForm = document.getElementById('popupForm');
  
    openPopupBtn.addEventListener('click', function () {
      popupForm.style.display = 'block';
    });
  
    // Agregar lógica para cerrar el popup cuando se envía el formulario
    const form = popupForm.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evitar que se envíe el formulario (puedes manejar esto según tus necesidades)
      popupForm.style.display = 'none';
    });
  });
  
