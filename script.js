// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarme!');
    // Aquí podrías agregar lógica adicional para enviar el formulario usando AJAX o similar.
});
