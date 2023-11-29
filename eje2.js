// 🔐 Múltiples intentos
// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

var usuarioCorrecto = 'fati';
var contraseñaCorrecta = '1234';
var contadorDeVeces = 0;

do {
    var usuario = prompt("Ingrese su usuario");
    var contraseña = prompt("Ingrese su contraseña");

    if (usuario===usuarioCorrecto && contraseña === contraseñaCorrecta){
        alert("Bienvenido de nuevo " + usuario);
        break;
    }

    contadorDeVeces = contadorDeVeces + 1;
    if (contadorDeVeces===3) {
        alert("Ya se quedo sin intentos")
    }

} while (contadorDeVeces<3)
