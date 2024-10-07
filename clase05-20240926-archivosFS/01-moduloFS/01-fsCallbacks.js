// Importa el módulo 'fs' (File System) de Node.js para manejar archivos
const fs = require("fs");

// Define la ruta del archivo donde se va a guardar el texto
let rutaArchivo = "./archivos/archivoCallbacks.txt";

// Define un texto que se escribirá en el archivo
let texto2 = `El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`;

// Escribe el texto en el archivo especificado en 'rutaArchivo'
fs.writeFile(rutaArchivo, texto2, error => {
    // Maneja cualquier error que ocurra durante la escritura del archivo
    if (error) {
        console.log(`Error...!!! detalle: ${error.message}`);
        return; // Sale de la función si hay un error
    }
    console.log("Archivo generado...!!!"); // Mensaje de éxito

    // Lee el contenido del archivo recién creado
    fs.readFile(rutaArchivo, { encoding: "utf-8" }, (error, datoRecuperado) => {
        // Maneja cualquier error que ocurra durante la lectura del archivo
        if (error) {
            console.log(`Error...!!! detalle: ${error.message}`);
            return; // Sale de la función si hay un error
        }
        console.log(datoRecuperado); // Imprime el contenido recuperado del archivo

        // Agrega una línea adicional al final del archivo
        fs.appendFile(rutaArchivo, "\n\nEditorial Alfaguara", error => {
            // Maneja cualquier error que ocurra durante la adición al archivo
            if (error) {
                console.log(`Error...!!! detalle: ${error.message}`);
                return; // Sale de la función si hay un error
            }
            console.log(`Editorial agregada`); // Mensaje de éxito

            // Elimina el archivo especificado en 'rutaArchivo'
            fs.unlink(rutaArchivo, error => {
                // Maneja cualquier error que ocurra durante la eliminación del archivo
                if (error) {
                    console.log(`Error...!!! detalle: ${error.message}`);
                    return; // Sale de la función si hay un error
                }
                console.log(`Archivo eliminado`); // Mensaje de éxito al eliminar el archivo
            });
        });
    });
});

// Código comentado para verificar si el archivo existe antes de realizar operaciones con él
// if(fs.existsSync(rutaArchivo)){
//     // leo si existe
// }