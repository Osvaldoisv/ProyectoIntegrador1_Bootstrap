document.getElementById('mostrarBtn').addEventListener('click', function() {
    var container = document.getElementById('miContainer');
    container.classList.toggle('mostrando'); // Alternar clase para mostrar/ocultar
    if (container.classList.contains('mostrando')) {
        this.textContent = 'BÚSQUEDA EMERGENTE';
    } else {
        this.textContent = 'BÚSQUEDA EMERGENTE';
    }
});