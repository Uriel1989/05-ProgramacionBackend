// Importa el módulo 'fs' (File System) de Node.js para manejar archivos
const fs = require("fs");

// Define la ruta del archivo donde se guardará la información de los héroes
let rutaArchivo = "./archivos/heroes.json";

// Crea un array de objetos que representan héroes con sus propiedades
let heroes = [
    {
        id: 1,
        name: "Spider-Man",
        alias: "Peter Parker",
        powers: ["Wall-crawling", "Web-shooting", "Superhuman strength"],
        team: "Avengers",
        publisher: "Marvel"
    },
    {
        id: 2,
        name: "Superman",
        alias: "Clark Kent",
        powers: ["Superhuman strength", "Flight", "Heat vision"],
        team: "Justice League",
        publisher: "DC"
    },
    {
        id: 3,
        name: "Iron Man",
        alias: "Tony Stark",
        powers: ["Powered armor", "Genius-level intellect", "Flight"],
        team: "Avengers",
        publisher: "Marvel"
    },
    // ... (más héroes)
    {
        id: 20,
        name: "Deadpool",
        alias: "Wade Wilson",
        powers: ["Regenerative healing", "Expert marksman", "Fourth wall breaking"],
        team: "None",
        publisher: "Marvel"
    }
];

// Define una función 'replacer' para modificar la forma en que se serializan los datos
const replacer = (clave, valor) => {
    // Si la clave es 'name', convierte el valor a mayúsculas
    if (clave === "name") {
        return valor.toUpperCase();
    }

    // Para otras claves, retorna el valor sin cambios
    return valor;
}

// Escribe el array de héroes en un archivo JSON en la ruta especificada
// Se utiliza JSON.stringify para convertir el array a una cadena JSON, aplicando el 'replacer' y una indentación de 5 espacios
fs.writeFileSync(rutaArchivo, JSON.stringify(heroes, replacer, 5));