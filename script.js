// Variable para controlar el tamaño base
let fontSizeActual = 16; 

function cambiarTamano(accion) {
    const cuerpo = document.getElementById('cuerpo');
    
    if (accion === 'aumentar' && fontSizeActual < 24) {
        fontSizeActual += 2;
    } else if (accion === 'disminuir' && fontSizeActual > 12) {
        fontSizeActual -= 2;
    }
    
    cuerpo.style.fontSize = fontSizeActual + 'px';
}

function saludoEspecial() {
    const hora = new Date().getHours();
    let mensaje = "";

    if (hora < 12) mensaje = "¡Buenos días! Disfruta tu mañana en Huajolotitlán.";
    else if (hora < 19) mensaje = "¡Buenas tardes! ¿Ya probaste el chileajo hoy?";
    else mensaje = "¡Buenas noches! Gracias por visitar nuestro portal.";

    alert(mensaje);
}