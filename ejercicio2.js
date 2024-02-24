/*ejercicio2.js  
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/
// ___________________________________________________________________________________________________________
export function ejecutarEjercicio2() {

alert("Ejecutando el ejercicio 2");
 
// Variables
let respuestaUsuario = prompt("Ingresa un número: ");
let numeroIngresado = parseFloat(respuestaUsuario);

// si el numero ingresado es diferente a un numero valido. 
if (!isNaN(numeroIngresado)) {
    // si numero ingresado es mayor que cero. 
    if (numeroIngresado > 0) {
        alert("El número ingresado es positivo.");
    }
    // si no numero ingresado es menor que cero. 
     else if (numeroIngresado < 0) {
        alert("El número ingresado es negativo.");
    } else {
        alert("El número ingresado es cero.");
    }
} else {
    alert("Por favor, ingresa un número válido.");
}
}
