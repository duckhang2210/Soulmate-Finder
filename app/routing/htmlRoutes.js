const express = require('express');
const app = express();
const path = require('path');


module.exports = (app) => {
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'));
});
app.get('/survey.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

};



