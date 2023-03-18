const express = require('express');
const { connecter } = require('./bd/connect');
const routesClient = require("./route/client");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/v1", routesClient);

connecter("mongodb://localhost:27017", (erreur)=>{
    if(erreur){
        console.log("Erreur connexion bdd");
        process.exit(-1);
    }else{
        console.log("Connexion réussi");
        app.listen(3000);
        console.log("Bonjour");
    }
});

