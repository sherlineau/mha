const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    name: String,
    alias: String,
    affiliation: String,
    quirkName: String,
    quirkDescription: String,
    birthday: String,
    height: Number,
    bloodtype: String,
    birthplace: String,
    personality: String,
    ultimateMoves: [String],
    image: String,
    description: String
})

module.exports.Character = mongoose.model('Character', CharacterSchema)