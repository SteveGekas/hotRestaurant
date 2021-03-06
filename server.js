//Importing express and path
const express = require('express');
const path = require('path');

//assinging variables and PORT number
const app = express();
const PORT = 8080;

//arrays to hold JSON data
const tables = [];
const waitlist = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/submit', (req, res)=> res.sendFile(path.join(__dirname, 'submit.html')));

app.get('/reserve', (req, res)=> res.sendFile(path.join(__dirname, 'reservations.html')));

app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitlist', (req, res) => res.json(waitlist));


//Post methods
app.post('/reservations', (req, res)=>{


});

app.post('/tables', (req, res)=>{

});


//server listening verification
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));