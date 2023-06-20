const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crud');


const objetodb = mongoose.connection

// para verificar que la connection fue exitosa
objetodb.on('connected', ()=>{
    console.log('Successfully Connected...')
})

// para verificar si hay algun error en la connection
objetodb.on('erro', ()=>{
    console.log('error while connecting...')
})

module.exports = mongoose