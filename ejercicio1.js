/* ejercicio1.js  
 Crea un sistema de puntuación para un juego. Si la puntuación es mayor
 o igual a 100, muestra ¡Felicidades, has ganado!. En caso contrario, muestra Intenta nuevamente para ganar.
*/
// ________________________________________________________________________________________________________
// utilizo la funcion exportar 
export function ejecutarEjercicio1() {
    alert("Ejecutando el ejercicio 1:")
// variables
let puntaje = prompt("Ingresa tu puntuación: ");
let puntuacionNumerica = parseInt(puntaje);

// verifico si la variable es un numero valido, en caso de ser afirmativo
// compruebo si ese numero es mayor o igual a 100. 
if (!isNaN(puntuacionNumerica)) 
{
    if (puntuacionNumerica >= 100)
    {
        alert("¡Felicidades, has ganado!");
    } 
    // si no. 
    else 
    {
        alert("Intenta nuevamente para ganar.");
    }
} else 
{
    alert("Por favor, ingresa una puntuación válida.");
}
}