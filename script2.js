function toggleCultura(id) {
    const itemSeleccionado = document.getElementById(`item-${id}`);
    
    const estaActivo = itemSeleccionado.classList.contains('activo');

    document.querySelectorAll('.item').forEach(item => {
        item.classList.remove('activo');
    });

    if (!estaActivo) {
        itemSeleccionado.classList.add('activo');
    }
}

console.log("Sección de Cultura de Santiago Huajolotitlán cargada correctamente.");