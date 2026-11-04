const { guardarDatos } = require('../database/database');

function insertarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el nombre: ", (nombre) => {
        rl.question("Ingrese el apellido: ", (apellido) => {
            rl.question("Ingrese la edad: ", (edad) => {
                rl.question("Ingrese el correo: ", (correo) => {
                    
                    const correoExiste = usuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase());
                    
                    if (correoExiste) {
                        console.log("\n ERROR: El correo '" + correo + "' ya está registrado.");
                    } else {
                        const nuevoUsuario = { nombre, apellido, edad: parseInt(edad), correo };
                        usuarios.push(nuevoUsuario);
                        guardarDatos(usuarios); 
                        console.log("\n Usuario registrado y guardado.");
                    }
                    callback();
                });
            });
        });
    });
}

module.exports = insertarUsuario;