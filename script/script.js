$(document).ready(function () {
    // Manejar la presentación del formulario y el almacenamiento de datos
    $("#agregarRedForm").submit(function (event) {
      event.preventDefault();

      // Obtener valores del formulario
      var nombreRed = $("#nombreRed").val();
      var enlaceRed = $("#enlaceRed").val();

      // Validar si ya existe la red
      if ($("#listaRedes").find("li:contains('" + nombreRed + "')").length === 0) {
        // Agregar red a la lista
        $("#listaRedes").append('<li class="list-group-item">' + nombreRed + ' - <a href="' + enlaceRed + '" target="_blank">Enlace</a></li>');
      }

      // Limpiar el formulario y cerrar el modal
      $("#agregarRedForm")[0].reset();
      $("#agregarRedModal").modal("hide");
    });
  });