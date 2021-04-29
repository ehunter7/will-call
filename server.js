const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = 4000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//add routes for api calls
// app.use(routes);

//connect to mongo DB


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});