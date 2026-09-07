
const formularioAcceso = document.querySelector("#form-acceso");

formularioAcceso.addEventListener("submit", function(event) {

    const dni = document.querySelector("#dni-acceso").value.trim();
    const password = document.querySelector("#password").value.trim();
    const errorDni = document.querySelector("#error-dni-acceso");
    const errorPassword = document.querySelector("#error-password");
    errorDni.textContent = "";
    errorPassword.textContent = "";


    if (dni === "") {
        event.preventDefault();
        errorDni.textContent = "Debes completar DNI";
        return;
    }

    if (isNaN(dni)) {
        event.preventDefault();
        errorDni.textContent = "El DNI debe contener solamente números";
        return;
    }

    if (password === "") {
        event.preventDefault();
        errorPassword.textContent = "Debes completar la contraseña";
        return;
    }

});


const formularioRegistro = document.querySelector("#form-registro");

formularioRegistro.addEventListener("submit", function(event) {

    const nombre = document.querySelector("#apellido").value.trim();
    const dni = document.querySelector("#dni-registro").value.trim();
    const email = document.querySelector("#email").value.trim();
    const errorNombre = document.querySelector("#error-nombre");
    const errorDni = document.querySelector("#error-dni-registro");
    const errorEmail = document.querySelector("#error-email");

    errorNombre.textContent = "";
    errorDni.textContent = "";
    errorEmail.textContent = "";

    if (nombre === "") {
        event.preventDefault();
        errorNombre.textContent = "Debes completar el nombre";
        return;
    }

    if (dni === "") {
        event.preventDefault();
        errorDni.textContent = "Debes completar DNI";
        return;
    }

    if (isNaN(dni)) {
        event.preventDefault();
        errorDni.textContent = "El DNI debe contener solamente números";
        return;
    }

    if (email === "") {
        event.preventDefault();
        errorEmail.textContent = "Debes completar el email";
        return;
    }

});



