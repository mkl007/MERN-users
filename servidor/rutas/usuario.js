const express = require('express')
const router = express.Router()
// const jsonify = require('')

// const mongoose = require('mongoose')
const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})


const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router


// Esto es una ruta de ejemplo
router.get('/ejemplo', (req, res)=>{
    res.end('Aqui desde rutas usuario ejemplo')
    console.log("ejemplo")
}) 


// ruta para agregar usuario
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save()
    if(nuevousuario){
        console.log('User created')
        res.send(nuevousuario);
        // res.send(nuevousuario)
    }
    else{
        res.send("error message")
    }
})

// ruta para mostrar usuarios
router.get('/obtenerusuarios', async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({});
        res.send(usuarios);
    } catch (err) {
        res.status(500).send({ error: 'Ocurrió un error al obtener los usuarios' });
    }
});


// ruta para obtener data de usuario
router.post('/obtenerdatausuario', async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({});
        res.send(usuarios);
    } catch (err) {
        res.status(500).send({ error: 'Ocurrió un error al obtener los datos del usuario...' });
    }
});

// // ruta para actualizar el usuario
// router.post('/editarusuario', (req, res) => {
//     // const usertoFind = ModeloUsuario.finOneAndUpdate('648e2cd282c9891016f0f4b6')
//     ModeloUsuario.findByIdAndUpdate({"idusuario": "648e2cd282c9891016f0f4b6"},
//         {nombre: "Great Dane"}, function(err, result){

//         if(err){
//             res.send(err)
//         }
//         else{
//             res.send(result.name)
//         }

//     })
// })
    

// })xx`

// ruta para editar usuario
router.post('/editarusuario',  (req, res) => {
    res.send("Thi this me")
    console.log("this is me again from editar ")
    
  });
  
