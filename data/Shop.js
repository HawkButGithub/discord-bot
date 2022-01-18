const mongoose = require('mongoose');
const { DB } = require('../config.js');

const conn = new mongoose.createConnection("mongodb+srv://narutodb:NarutoSexyBeautyPassword12345678910@narutobotdb.zc9ei.mongodb.net/NarutoBotDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const schema = new mongoose.Schema({
 ObjetPrix: String,
 ObjetNom: String,
 ObjetDescription: String,
 ObjetID: String,
 ObjetOnwer: String

});

const shopSchema = conn.model('Shop', schema);

module.exports = shopSchema;