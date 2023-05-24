/**
 * Función para la comprobación de la contraseña y cambiar color de los campos que se cumplan.
 */
window.onload = function () {
    let passwordField = document.getElementById("pass");

    passwordField.addEventListener("input", function () {
        let password = passwordField.value;

        let lengthIndicator = document.querySelector('span[data-indicator="length"]');
        let numberIndicator = document.querySelector('span[data-indicator="number"]');
        let uppercaseIndicator = document.querySelector('span[data-indicator="uppercase"]');
        let specialIndicator = document.querySelector('span[data-indicator="special"]');

        let result = checkPasswordStrength(password);

        lengthIndicator.style.color = result.length ? "green" : "red";
        uppercaseIndicator.style.color = result.uppercase ? "green" : "red";
        numberIndicator.style.color = result.number ? "green" : "red";
        specialIndicator.style.color = result.special ? "green" : "red";
    });

    function checkPasswordStrength(password) {
        let result = {
            length: password.length >= 8 && password.length <= 16,
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        }
        return result;
    }
}

/**
 * Función para comprobar que no se dejen campos en blanco.
 */
function comprobarCosas() {

    var name = document.getElementById("nombreUser").value;
    var correo = document.getElementById("correo").value;
    var pass = document.getElementById("pass").value;
    var passRep = document.getElementById("passRep").value;
    var terms = document.getElementById("terms").checked;

    if (name == "" || correo == "" || pass == "" || passRep == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Habrás dejado algún campo en blanco'
        })
    }
    else if (pass != passRep) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden'
        })
    }
    else if (!terms) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Acepta los términos del servicio'
        })
    }
    else {
        obj = {
            nombreUser: name,
            correo: correo,
            pass: pass,
            passRep: passRep
        }

        Swal.fire({
            icon: 'success',
            title: 'Perfecto',
            text: 'el objeto será ' + JSON.stringify(obj)
        })
    }
}

/**
 * Función para mostrar la política de contraseñas (caracteres especiales permitidos para la contraseña.)
 */
function politicaContraseña() {
    Swal.fire({
        title: 'Política de contraseñas',
        html: '• Debe contener entre 8 y 16 caracteres.<br>• Debe tener al menos un número<br>• Debe tener al menos una mayúscula<br>• Debe tener al menos un caracter especial:<br> !@#$%^&*()_+-=[]{};:"\\|,.<>\/?\'',
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });
}
