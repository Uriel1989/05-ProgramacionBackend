// Importa el módulo 'fs' (File System) de Node.js para manejar archivos
const fs = require("fs");

// Desestructura el objeto 'promises' del módulo 'fs' para trabajar con promesas
const { promises: fsPromesas } = require("fs");

// Define la ruta del archivo donde se guardará el texto
let rutaArchivo = "./archivos/archivoPromesas.txt";

// Define el texto que se escribirá en el archivo
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`;

// Función asincrónica que maneja operaciones con archivos
const archivos = async () => {
    // Escribe el texto en el archivo especificado en 'rutaArchivo'
    await fs.promises.writeFile(rutaArchivo, texto3);
    console.log("archivo generado...!!!"); // Mensaje de éxito

    // Lee el contenido del archivo y almacena el resultado en 'datoLeido'
    let datoLeido = await fs.promises.readFile(rutaArchivo, { encoding: "utf-8" });
    console.log(datoLeido); // Imprime el contenido leído del archivo

    // Agrega una línea adicional al final del archivo
    await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Sudamericana");
    console.log(`Editorial agregada...!!!`); // Mensaje de éxito al agregar editorial

    // Establece un temporizador para eliminar el archivo después de 2 segundos (2000 ms)
    setTimeout(async () => {
        await fs.promises.unlink(rutaArchivo); // Elimina el archivo especificado en 'rutaArchivo'
        console.log("Archivo eliminado...!!!"); // Mensaje de éxito al eliminar el archivo
    }, 2000);
}

// Llama a la función 'archivos' para ejecutar las operaciones definidas
archivos();

// Otra operación de escritura utilizando promesas directamente
fsPromesas.writeFile("./archivos/prueba1.txt", "chau...!!!") // Crea un nuevo archivo y escribe "chau...!!!"
    .then(() => console.log("archivo generado...!!!")); // Mensaje de éxito al generar el archivo