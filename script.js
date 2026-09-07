
const formularioAcceso = document.querySelector("#form-acceso");

formularioAcceso.addEventListener("submit", function(event) {

    const dni = document.querySelector("#dni-acceso").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (dni === "") {
        event.preventDefault();
        alert("Tenés que completar el DNI.");
        return;
    }

    if (isNaN(dni)) {
        event.preventDefault();
        alert("El DNI debe contener solamente números.");
        return;
    }

    if (password === "") {
        event.preventDefault();
        alert("Tenés que completar la contraseña.");
        return;
    }

});


const formularioRegistro = document.querySelector("#form-registro");

formularioRegistro.addEventListener("submit", function(event) {

    const nombre = document.querySelector("#apellido").value.trim();
    const dni = document.querySelector("#dni-registro").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (nombre === "") {
        event.preventDefault();
        alert("Tenés que completar el nombre.");
        return;
    }

    if (dni === "") {
        event.preventDefault();
        alert("Tenés que completar el DNI.");
        return;
    }

    if (isNaN(dni)) {
        event.preventDefault();
        alert("El DNI debe contener solamente números.");
        return;
    }

    if (email === "") {
        event.preventDefault();
        alert("Tenés que completar el email.");
        return;
    }

});

