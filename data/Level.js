const mongoose = require('mongoose');
const { DB } = require('../config.js');

const conn = new mongoose.createConnection("mongodb+srv://narutodb:NarutoSexyBeautyPassword12345678910@narutobotdb.zc9ei.mongodb.net/NarutoBotDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

const schema = new mongoose.Schema({

userID : String,
currentLvl: Number,
nextLvl: Number,
currentXp: Number,
nextXp: Number

});

const levelSchema = conn.model('Level', schema);

module.exports = levelSchema; 