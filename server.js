const express = require('express');
require('dotenv').config();
require('./config/DbConnect');

const app = express();


const PORT = process.env.PORT || 3000;

app.get('/' , (req, res)=>{
    res.send('Hi there')
})

app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`)
})