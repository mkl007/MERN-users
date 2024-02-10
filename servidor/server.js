
const express = require('express')
const app = express()
const mongoose = require('mongoose')


// importar la connection
const archivoDB = require('./conexion')

// Importar el archivo de rutas y modelo de usuario
const rutasusuario = require('./rutas/usuario')

// Importar el body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutasusuario)

app.get('/', (req, res) => {
    res.end('Este servidor esta corriendo')
})

// Confg el server basico
app.listen(5000, function() {
    console.log('Este servidor esta corriendo en el puerto 5000')
})