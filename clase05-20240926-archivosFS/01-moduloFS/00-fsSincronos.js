// Importa el módulo 'fs' (File System) de Node.js para manejar archivos
const fs = require("fs");

// Define la ruta del archivo donde se va a guardar el texto
let rutaArchivo = "./archivos/pruebaSinc.txt";

// Define un texto que se escribirá en el archivo
let texto1 = `La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`;

// Escribe el texto en el archivo especificado en 'rutaArchivo' usando codificación por defecto (utf-8)
fs.writeFileSync(rutaArchivo, texto1);

// Comprueba si el archivo existe en la ruta especificada
if (fs.existsSync(rutaArchivo)) {
    // Si existe, imprime un mensaje confirmando su existencia
    console.log(`Existe el archivo ${rutaArchivo}`);
}

// Lee el contenido del archivo y lo almacena en 'textoRecuperado' usando codificación utf-8
let textoRecuperado = fs.readFileSync(rutaArchivo, { encoding: "utf-8" });
// Imprime el contenido recuperado del archivo
console.log(textoRecuperado);

// Agrega una línea adicional al final del archivo
fs.appendFileSync(rutaArchivo, "\n\nEditorial Planeta");
// Imprime un mensaje indicando que la editorial ha sido agregada
console.log("editorial agregada...!!!");

// Establece un temporizador para eliminar el archivo después de 2 segundos (2000 ms)
setTimeout(() => {
    // Elimina el archivo especificado en 'rutaArchivo'
    fs.unlinkSync(rutaArchivo);
}, 2000);