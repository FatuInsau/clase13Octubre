// ✊🤚✌️ Piedra, papel, tijera II
// Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar se debe indicar quién ganó. Ejemplo:

var CompuGano=0;
var JugadorGano=0;
var msj = '';

// cantidad de rondas
var rondas = parseInt(prompt("Ingrese la cantidad de rondas"));

for(let cadaRonda = 0; cadaRonda<rondas; cadaRonda++){
    // pedimos al usuario una respuesta
    var respuestaUsurario = prompt("Ingrese piedra, papel o tijera").toLowerCase();
    // la compu genera una respuesta
    var respuestaCompu = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    // comparando respuestas para ver quien gana
    if(respuestaCompu===1) {
        respuestaCompu = "tijera"
        if(respuestaUsurario==="papel"){
            // gana el compu 
            CompuGano++;
            msj="Compu ha ganado esta ronda 🎉";
        } else if (respuestaUsurario==="piedra"){
            // gana el usuario
            JugadorGano++;
            msj="Jugador ha ganado esta ronda 🎉";
        } else {
            // empate
            msj="Hay empate en esta ronda";
        }
    } else if (respuestaCompu===2) {
        respuestaCompu = "papel"
        if(respuestaUsurario==="piedra"){
            // gana el compu 
            CompuGano++;
            msj="Compu ha ganado esta ronda 🎉";
        } else if (respuestaUsurario==="tijera"){
            // gana el usuario
            JugadorGano++;
            msj="Jugador ha ganado esta ronda 🎉";
        } else {
            // empate
            msj="Hay empate en esta ronda";
        }
    } else {
        respuestaCompu="piedra"
        if(respuestaUsurario==="tijera"){
            // gana el compu 
            CompuGano++;
            msj="Compu ha ganado esta ronda 🎉";
        } else if (respuestaUsurario==="papel"){
            // gana el usuario
            JugadorGano++;
            msj="Jugador ha ganado esta ronda 🎉";
        } else {
            // empate
            msj="Hay empate en esta ronda";
        }
    }

    // mostrar un mensaje de como salio 
    alert(`Ronda: ${cadaRonda} de ${rondas}
    🙍‍♀️ Jugadora: ${respuestaUsurario}
    👾 Computadora: ${respuestaCompu}
    ${msj}
    Puntaje: ${JugadorGano} (Jugadora) - ${CompuGano} (Computadora)`)

};

// por cada ronda
    // ver quien gana piedra papel o tijera
    // guardar el resulta
    // mostrar mensaje

// compu elija entre piedra papel y tijera
// 1 --> tijera
// 2 --> papel
// 3 --> piedra  

// Ronda: 2 de 5
// 🙍‍♀️ Jugadora: Piedra
// 👾 Computadora: Tijera
// Jugadora ha ganado esta ronda 🎉
// Puntaje: 2 (Jugadora) - 0 (Computadora)