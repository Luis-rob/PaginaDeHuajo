document.getElementById('formRecomendacion').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('tipo').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log("Enviando recomendación...");
    console.log(`De: ${nombre}, Categoría: ${categoria}, Mensaje: ${mensaje}`);

    document.getElementById('formRecomendacion').classList.add('hidden');
    document.getElementById('mensajeExito').classList.remove('hidden');
});

function resetearFormulario() {
    document.getElementById('formRecomendacion').reset();
    document.getElementById('formRecomendacion').classList.remove('hidden');
    document.getElementById('mensajeExito').classList.add('hidden');
}