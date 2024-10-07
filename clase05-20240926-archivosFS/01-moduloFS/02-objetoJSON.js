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

// Escribe el array de héroes en un archivo JSON en la ruta especificada
// fs.writeFileSync(rutaArchivo, JSON.stringify(heroes, null, "\t")) // Esta línea está comentada
fs.writeFileSync(rutaArchivo, JSON.stringify(heroes, null, 5)); // Escribe el archivo con una indentación de 5 espacios

// Lee el contenido del archivo y lo convierte de JSON a un objeto JavaScript
let datos = JSON.parse(fs.readFileSync(rutaArchivo, { encoding: "utf-8" }));
// Imprime el objeto completo recuperado del archivo
console.log(datos);
// Imprime el nombre del primer héroe en el array recuperado
console.log(datos[0].name); 
// Imprime el nombre del primer héroe en el array original
console.log(heroes[0].name);