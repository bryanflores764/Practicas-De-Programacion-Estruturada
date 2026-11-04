const fs = require('fs')
const path = require('path')

const ARCHIVO_JSON = path.join(__dirname, '..', 'usuarios.json')

function cargarDatos (){

    if(fs.existsSync(ARCHIVO_JSON)){
        const data = fs.readFileSync(ARCHIVO_JSON,'utf8')

        return JSON.parse(data)
    }else{
        fs.writeFileSync(ARCHIVO_JSON , JSON.stringify([],null,2))

        return []

    }
}

function guardarDatos(usuarios){
    fs.writeFileSync(ARCHIVO_JSON,JSON.stringify(usuarios,null,2));
}







module.exports = { cargarDatos, guardarDatos }