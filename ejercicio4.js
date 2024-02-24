/* ejercicio4.js  
Crea un mensaje que informe al
usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
*/
// ________________________________________________________________________________________________________
// utilizo la funcion exportar : export
export function ejecutarEjercicio4() {
    alert("Ejecutando ejercicio 4:");

    //supongamos que tenemos un saldo almacenado en una variable llamada saldo. 
    let saldo = 1000; 

    //creo un mensaje usando un template string para incluir el valor del saldo
    let mensaje = `Su saldo actual es: $${saldo}`;

    //muestro el mensaje
    alert(mensaje);


}
