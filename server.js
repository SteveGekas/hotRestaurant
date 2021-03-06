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


//server listening verification
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));