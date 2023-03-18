const express = require('express');
const res = require('express/lib/response');
const { connecter } = require('./bd/connect');
const app = express();

app.get("/", (req, res)=>{
    console.log("Yo la team");
});

connecter();

app.listen(3000);
console.log("Bonjour");