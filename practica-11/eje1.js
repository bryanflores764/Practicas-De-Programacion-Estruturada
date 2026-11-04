/*
 * PROYECTO INTEGRADOR: CRUD DE USUARIOS CON PERSISTENCIA EN JSON
 * Este programa guarda los datos en un archivo 'usuarios.json' en tu disco duro.
 */

const readline = require('readline');
const fs = require('fs'); // Módulo para manejar archivos

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ARCHIVO_JSON = 'usuarios.json';
let usuarios = [];

// --- FUNCIONES DE PERSISTENCIA (Guardar y Leer archivo) ---

// Lee el archivo JSON al iniciar el programa
function cargarDatos() {
    if (fs.existsSync(ARCHIVO_JSON)) {
        const data = fs.readFileSync(ARCHIVO_JSON, 'utf8');
        usuarios = JSON.parse(data); // Convierte el texto JSON a un objeto/arreglo de JS
    } else {
        // Si no existe, lo crea con un arreglo vacío
        fs.writeFileSync(ARCHIVO_JSON, JSON.stringify([], null, 2));
    }
}

// Guarda los datos actuales en el archivo JSON
function guardarDatos() {
    // JSON.stringify convierte el arreglo a texto y writeFileSync lo guarda en el disco
    fs.writeFileSync(ARCHIVO_JSON, JSON.stringify(usuarios, null, 2));
}

// --- FUNCIONES DEL CRUD ---

// 1. Insertar Usuario
function insertarUsuario(callback) {
    rl.question("Ingrese el nombre: ", (nombre) => {
        rl.question("Ingrese el apellido: ", (apellido) => {
            rl.question("Ingrese la edad: ", (edad) => {
                rl.question("Ingrese el correo: ", (correo) => {
                    
                    // Validar correo duplicado
                    const correoExiste = usuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase());
                    
                    if (correoExiste) {
                        console.log("\n❌ ERROR: El correo '" + correo + "' ya está registrado.");
                    } else {
                        const nuevoUsuario = {
                            nombre: nombre,
                            apellido: apellido,
                            edad: parseInt(edad),
                            correo: correo
                        };
                        usuarios.push(nuevoUsuario);
                        guardarDatos(); // <-- ¡AQUÍ GUARDAMOS EN EL ARCHIVO JSON!
                        console.log("\n✅ Usuario registrado y guardado en el archivo JSON.");
                    }
                    callback();
                });
            });
        });
    });
}

// 2. Mostrar Usuarios (lee el arreglo actual)
function mostrarUsuarios(callback) {
    console.log("\n--- LISTA DE USUARIOS (Desde el archivo JSON) ---");
    if (usuarios.length === 0) {
        console.log("No hay usuarios registrados en el archivo.");
    } else {
        // Podemos leer el archivo directamente para mostrar exactamente lo que hay guardado
        const dataActual = fs.readFileSync(ARCHIVO_JSON, 'utf8');
        console.log(dataActual);
    }
    callback();
}

// 3. Actualizar Usuario
function actualizarUsuario(callback) {
    rl.question("Ingrese el correo del usuario a actualizar: ", (correoBuscar) => {
        const index = usuarios.findIndex(u => u.correo.toLowerCase() === correoBuscar.toLowerCase());

        if (index === -1) {
            console.log("\n❌ ERROR: Usuario no encontrado.");
            callback();
        } else {
            console.log("\nUsuario encontrado. Ingrese los nuevos datos:");
            rl.question("Nuevo nombre (" + usuarios[index].nombre + "): ", (nuevoNombre) => {
                rl.question("Nuevo apellido (" + usuarios[index].apellido + "): ", (nuevoApellido) => {
                    rl.question("Nueva edad (" + usuarios[index].edad + "): ", (nuevaEdad) => {
                        
                        usuarios[index].nombre = nuevoNombre || usuarios[index].nombre;
                        usuarios[index].apellido = nuevoApellido || usuarios[index].apellido;
                        usuarios[index].edad = nuevaEdad ? parseInt(nuevaEdad) : usuarios[index].edad;
                        
                        guardarDatos(); // <-- GUARDAMOS LOS CAMBIOS EN EL JSON
                        console.log("\n✅ Usuario actualizado y guardado en el archivo JSON.");
                        callback();
                    });
                });
            });
        }
    });
}

// 4. Eliminar Usuario
function eliminarUsuario(callback) {
    rl.question("Ingrese el correo del usuario a eliminar: ", (correoEliminar) => {
        const existe = usuarios.some(u => u.correo.toLowerCase() === correoEliminar.toLowerCase());

        if (!existe) {
            console.log("\n❌ ERROR: Usuario no encontrado.");
        } else {
            // Filtramos el arreglo para quitar el usuario
            usuarios = usuarios.filter(u => u.correo.toLowerCase() !== correoEliminar.toLowerCase());
            guardarDatos(); // <-- ACTUALIZAMOS EL JSON SIN EL USUARIO
            console.log("\n✅ Usuario eliminado y archivo JSON actualizado.");
        }
        callback();
    });
}

// --- MENÚ PRINCIPAL ---

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
                insertarUsuario(menuPrincipal);
                break;
            case '2':
                mostrarUsuarios(menuPrincipal);
                break;
            case '3':
                actualizarUsuario(menuPrincipal);
                break;
            case '4':
                eliminarUsuario(menuPrincipal);
                break;
            case '5':
                console.log("\nSaliendo del sistema... Los datos quedaron guardados en 'usuarios.json'.");
                rl.close();
                break;
            default:
                console.log("\n❌ Opción no válida. Intente de nuevo.");
                menuPrincipal();
                break;
        }
    });
}

// --- INICIO DEL PROGRAMA ---
// 1. Cargamos los datos del archivo al arrancar
cargarDatos();
console.log("Bienvenido al sistema CRUD. (Base de datos: usuarios.json)");

// 2. Mostramos el menú
menuPrincipal();