// RUTAS DEL SERVIDOR PARA QUE EL USUARIO CREE Y ACTUALICE UNA NUEVA NOTA
const express = require('express')  // FACILITA LA CREACIÓN DE RUTAS
const router = express.Router();

router.get('/notes', (request, response) =>{
    response.send('Notes from database');
});

module.exports = router;