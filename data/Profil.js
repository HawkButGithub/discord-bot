const mongoose = require('mongoose');
const { DB } = require('../config.js');

const conn = new mongoose.createConnection("mongodb+srv://narutodb:NarutoSexyBeautyPassword12345678910@narutobotdb.zc9ei.mongodb.net/NarutoBotDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const schema = new mongoose.Schema({
    userID: Number,
    nomrp: String,
    color: String,
    apparence: String,
    bijuu: String,
    kekkei: String,
    age: Number,
    chakra: String,
    pupille: String,
    village: String,
    arme: String,
    clan: String
});

const profilSchema = conn.model('Profil', schema);

module.exports = profilSchema;