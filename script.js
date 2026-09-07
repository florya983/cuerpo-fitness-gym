

function validarAcceso() {

    const dni = document.querySelector("#dni-acceso").value.trim();
    const password = document.querySelector("#password").value.trim();

    const errorDni = document.querySelector("#error-dni-acceso");
    const errorPassword = document.querySelector("#error-password");

    errorDni.textContent = "";
    errorPassword.textContent = "";

    if (dni === "") {
        errorDni.textContent = "Debes completar DNI";
        return false;
    }

    if (isNaN(dni)) {
        errorDni.textContent = "El DNI debe contener solamente números";
        return false;
    }

    if (password === "") {
        errorPassword.textContent = "Debes completar la contraseña";
        return false;
    }

    return true;
}


function validarRegistro() {

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
        errorNombre.textContent = "Debes completar el nombre";
        return false;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
         errorNombre.textContent = "El nombre debe contener solamente letras";
        return false;
}
    if (dni === "") {
        errorDni.textContent = "Debes completar DNI";
        return false;
    }

    if (isNaN(dni)) {
        errorDni.textContent = "El DNI debe contener solamente números";
        return false;
    }

    if (email === "") {
        errorEmail.textContent = "Debes completar el email";
        return false;
    }

    return true;
}


