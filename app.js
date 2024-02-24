import { ejecutarEjercicio1 } from "./ejercicio1.js";
import { ejecutarEjercicio2 } from "./ejercicio2.js";
import { ejecutarEjercicio3 } from "./ejercicio3.js";
import { ejecutarEjercicio4 } from "./ejercicio4.js";
import { ejecutarEjercicio5 } from "./ejercicio5.js";

// Menú principal
function menu() {
    let opcion = prompt("Selecciona un ejercicio:\n1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n4. Ejercicio 4\n5. Ejercicio 5\n6. Salir");

    switch (opcion) 
    {
        case "1":
            ejecutarEjercicio1();
            break;
        case "2":
            ejecutarEjercicio2();
            break;
        case "3":
            ejecutarEjercicio3();
            break;
        case "4":
            ejecutarEjercicio4();
            break;
        case "5":
            ejecutarEjercicio5();
            break;
        case "6":
            alert("Saliendo del programa.");
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción válida.");
            menu(); // Vuelve a mostrar el menú si la opción no es válida
            break;
    }
}
// Llama a la función del menú para iniciar el programa
menu();