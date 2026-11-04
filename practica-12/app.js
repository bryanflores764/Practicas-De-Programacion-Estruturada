const readline = require('readline');
const { cargarDatos } = require('./database/database');

const insertarUsuario = require('./operaciones/insertar');
const mostrarUsuarios = require('./operaciones/mostrar');
const actualizarUsuario = require('./operaciones/actualizar');
const eliminarUsuario = require('./operaciones/eliminar');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usuarios = cargarDatos();

function menuPrincipal() {
    console.log("\n--- SISTEMA DE REGISTRO DE USUARIOS ---");
    console.log("1. Insertar nuevo usuario");
    console.log("2. Mostrar todos los usuarios (JSON)");
    console.log("3. Actualizar usuario");
    console.log("4. Eliminar usuario");
    console.log("5. Salir");
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                insertarUsuario(rl, usuarios, menuPrincipal);
                break;
            case '2':
                mostrarUsuarios(usuarios, menuPrincipal);
                break;
            case '3':
                actualizarUsuario(rl, usuarios, menuPrincipal);
                break;
            case '4':
                eliminarUsuario(rl, usuarios, menuPrincipal);
                break;
            case '5':
                console.log("\nSaliendo del sistema... Los datos están seguros en 'usuarios.json'.");
                rl.close();
                break;
            default:
                console.log("\n Opción no válida. Intente de nuevo.");
                menuPrincipal();
                break;
        }
    });
}

console.log("Bienvenido al sistema CRUD modular.");
menuPrincipal();