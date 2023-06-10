// PAGINA PRINCIAPAL PARA CUALQUIER PERSONA
const express = require('express')  // FACILITA LA CREACIÓN DE RUTAS
const router = express.Router();
router.get('/', (request, response) =>{
    response.send('index');
});
module.exports = router;