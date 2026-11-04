function mostrarUsuarios(usuarios, callback) {
    console.log("\n LISTA DE USUARIOS Desde el archivo JSON");
    if (usuarios.length === 0) {
        console.log("No hay usuarios registrados en el archivo.");
    } else {
        console.log(JSON.stringify(usuarios, null, 2));
    }
    callback();
}

module.exports = mostrarUsuarios;
