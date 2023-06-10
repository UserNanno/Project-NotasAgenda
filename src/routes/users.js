// RUTAS PARA QUE EL USUARIO PUEDA ATENTICARSE EN LA APLICACIÓN
const express = require('express')  // FACILITA LA CREACIÓN DE RUTAS
const router = express.Router();

router.get('/users/signin', (request, response)=>{
    response.render('users/signin');
});

router.get('/users/signup', (request, response)=>{
    response.render('users/signup');
})

module.exports = router;