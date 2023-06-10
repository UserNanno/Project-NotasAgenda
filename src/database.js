const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/notes-db-app') // A partir de NodeJs(V17.x) ya no se usa localhost, sino 127.0.0.1
    .then(db =>console.log('DB is connected'))
    .catch(err => console.error(err));