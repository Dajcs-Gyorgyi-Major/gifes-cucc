const mongoose = require('mongoose');

function adatbazisCsatlakozas() {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((res) => console.log('Sikeres csatlakozás az adatbázishoz!'))
        .catch((err) => console.log(err.message));
}

module.exports = adatbazisCsatlakozas;
