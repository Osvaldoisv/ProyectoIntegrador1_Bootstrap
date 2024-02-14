document.getElementById('mostrarBtn').addEventListener('click', function() {
    var container = document.getElementById('miContainer');
    container.classList.toggle('mostrando'); // Alternar clase para mostrar/ocultar
    if (container.classList.contains('mostrando')) {
        this.textContent = 'Ocultar Container';
    } else {
        this.textContent = 'Mostrar Container';
    }
});