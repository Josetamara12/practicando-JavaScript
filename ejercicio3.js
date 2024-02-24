/*ejercicio3.js  
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado"
o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/
// __________________________________________________________________________________________________________
export function ejecutarEjercicio3() 
{
    alert("ejecutando el ejercicio 3 ")

    // Pregunta al usuario que dia de la semana es
    let respuestaUsuario = prompt("¿Que dia de la semana es?");
    // Convierto la respuesta a minusculas para evitar problemas de mayusculas
    respuestaUsuario = respuestaUsuario.toLocaleLowerCase(); 

    // Verifico si la respuesta es "sabado" o "domingo"
    if  (respuestaUsuario == "sabado" || respuestaUsuario == "domingo")
    {
        alert("Feliz fin de semana!");
    }
        else
    { 
     alert("Buena Semana!")
    }
}