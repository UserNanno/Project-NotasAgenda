// RUTAS PARA QUE EL USUARIO PUEDA ATENTICARSE EN LA APLICACIÓN
const express = require('express')  // FACILITA LA CREACIÓN DE RUTAS
const router = express.Router();

router.get('/users/signin', (request, response)=>{
    response.send('Ingresando a la app');
});

router.get('/users/signup', (request, response)=>{
    response.send('Formulario de autenticación');
})

module.exports = router;