const { guardarDatos } = require('../database/database');

function actualizarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el correo del usuario a actualizar: ", (correoBuscar) => {
        const index = usuarios.findIndex(u => u.correo.toLowerCase() === correoBuscar.toLowerCase());

        if (index === -1) {
            console.log("\n ERROR: Usuario no encontrado.");
            callback();
        } else {
            console.log("\nUsuario encontrado. Ingrese los nuevos datos:");
            rl.question("Nuevo nombre (" + usuarios[index].nombre + "): ", (nuevoNombre) => {
                rl.question("Nuevo apellido (" + usuarios[index].apellido + "): ", (nuevoApellido) => {
                    rl.question("Nueva edad (" + usuarios[index].edad + "): ", (nuevaEdad) => {
                        
                        usuarios[index].nombre = nuevoNombre || usuarios[index].nombre;
                        usuarios[index].apellido = nuevoApellido || usuarios[index].apellido;
                        usuarios[index].edad = nuevaEdad ? parseInt(nuevaEdad) : usuarios[index].edad;
                        
                        guardarDatos(usuarios); 
                        console.log("\n Usuario actualizado.");
                        callback();
                    });
                });
            });
        }
    });
}

module.exports = actualizarUsuario;