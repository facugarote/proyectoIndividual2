const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});
app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));  // Permite enviar un archivo HTML
 });
app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));  // Permite enviar un archivo HTML
 });

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.listen(3002, () => {
    console.log("Servidor corriendo");
});
