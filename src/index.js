const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Inicializations

const app = express();
require('./database');

// settings -> Configuraciones

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({                         // No se usa solo exphbs, sino exphbs.engine
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Middlewares -> Iran todas las funciones que serán ejecutadas antes de llegar al servidor 
//                o cuando llegan al servidor, antes de pasarsela a las rutas

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method')); 
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

// Global variables -> Colocar datos que toda la aplicación tenga acceso



// Routes -> Para las rutas

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


// Static Files -> Configurar donde estará la carpeta de los archivos estáticos

app.use(express.static(path.join(__dirname, 'public')));

// Inicializar servidor 

app.listen(app.get('port'), () =>{
    console.log("Server on port ", app.get('port'))
});