// PAGINA PRINCIAPAL PARA CUALQUIER PERSONA
const express = require('express')  // FACILITA LA CREACIÓN DE RUTAS
const router = express.Router();
router.get('/', (request, response) =>{
    response.render('index');
});

router.get('/about', (request, response)=>{
    response.render('about');
});
module.exports = router;