const express = require('express');
const { ajouterClient, getTousClient, getClient, updateClient, deleteClient } = require('../controller/client');
const router = express.Router();

router.route("/client").post(ajouterClient);
router.route("/client").get(getTousClient);
router.route("/client/:id").get(getClient);
router.route("/client/:id").put(updateClient);
router.route("/client/:id").delete(deleteClient);
module.exports = router;