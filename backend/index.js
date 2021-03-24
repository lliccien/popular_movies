const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
    path: `.env.${NODE_ENV}`
});

const app =  express();
const  port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Test MyBarber</h1>');
});

app.get('/popularity', (req, res) => {
    const url = ' http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
    let result = {};
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.TOKEN}`,
            'Content-Type': 'application/json'
        }
    })
    .then( promFectch => promFectch.json())
    .then(resp => res.json(resp))
    .catch(err => console.error(err));
    
});

app.listen(port, () =>{
    console.log(`Server listening in http://localhost:${port}` );
});