
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
router.post('/agregarusuario',  (req, res) => {
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
        // const useroptenido = await ModeloUsuario.find({_id:req.body._id});
        const useroptenido = await ModeloUsuario.find({idusuario:req.body.idusuario});
        // const useroptenido = await ModeloUsuario.find({idusuario:req.body.idusuario});
        res.send(useroptenido);
    } catch (err) {
        res.status(500).send({ error: 'Ocurrió un error al obtener los datos del usuario...' });
    }
});

// aqui para editar el usuario
router.put('/actualizaUsuario', async (req, res) =>{
    const usuarioEditado = await ModeloUsuario.findOneAndUpdate({idusuario: req.body.idusuario},
        {nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        },{new:true})
        if (usuarioEditado) {
            res.send(usuarioEditado)
            console.log('Aqui bro');
        }
        else{
            res.send('No se pudo Actualizar!')
        }
    
})

router.delete('/eliminarusuario', async (req, res) => {
    try {
      const response = await ModeloUsuario.findByIdAndDelete({
        _id: req.body._id
      });
      console.log(`El usuario ${response.nombre}, de email: ${response.email} ha sido eliminado!`);
      res.send(response);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al eliminar el usuario');
    }
  });
  