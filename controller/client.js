const { Client } = require("../model/client")
const user = require("../bd/connect");
const { ObjectId } = require("mongodb");

const ajouterClient = async(req, res)=>{
    try {
        let client = new Client(req.body.nom, req.body.email);

        let result = await user.bd().collection("client").insertOne(client);

        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getTousClient = async(req, res)=>{
    try {
        let cursor = client.bd().collection("client").find();
        let result = await cursor.toArray();
        if(result.lenght>0){
            res.status(200).json(result);
        }
        else{
            res.status(204).json({msg : "Aucun client trouvé"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getClient = async(req, res)=>{
    try {
        let id = new ObjectId(req.params.id);
        let cursor = client.bd().collection("client").find({_id : id});
        let result = await cursor.toArray();
        if(result.lenght>0){
            res.status(200).json(result[0]);
        }
        else{
            res.status(204).json({msg : "Client non trouvé"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const updateClient = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.id);
        let nNom = req.body.nom;
        let nEmail = req.body.email;

        let result = await client.bd().collection("client").updateOne({_id : id}, {$set : {nom : nNom, email : nEmail}});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteClient = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.id);

        let result = await client.bd().collection("client").deleteOne({_id : id});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
module.exports = {ajouterClient, getTousClient, getClient, updateClient, deleteClient };