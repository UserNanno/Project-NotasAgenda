// PAGINA PRINCIAPAL PARA CUALQUIER PERSONA
const express = require('express')  // FACILITA LA CREACIÓN DE RUTAS
const router = express.Router();
router.get('/', (request, response) =>{
    response.send('Index');
});

router.get('/about', (request, response)=>{
    response.send('About');
});
module.exports = router;