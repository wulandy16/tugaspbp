const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');
const dosenController = require('./controllers/dosenController');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//Endpoint untuk mahasiswa
app.use('/mahasiswa', mahasiswaController);

//Endpoint untuk dosen
app.use('/dosen', dosenController);

//Jalankan server
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});