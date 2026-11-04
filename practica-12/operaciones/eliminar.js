const { guardarDatos } = require('../database/database');

function eliminarUsuario(rl, usuarios, callback) {
    rl.question("Ingrese el correo del usuario a eliminar: ", (correoEliminar) => {
        const existe = usuarios.some(u => u.correo.toLowerCase() === correoEliminar.toLowerCase());

        if (!existe) {
            console.log("\n ERROR: Usuario no encontrado.");
        } else {
            const nuevosUsuarios = usuarios.filter(u => u.correo.toLowerCase() !== correoEliminar.toLowerCase());
            usuarios.length = 0;
            usuarios.push(...nuevosUsuarios);
            
            guardarDatos(usuarios); 
            console.log("\n Usuario eliminado y archivo JSON actualizado.");
        }
        callback();
    });
}

module.exports = eliminarUsuario;