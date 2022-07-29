const { Character } = require('../models/mha_character.model')

module.exports.getAll = (req, res) => {
  Character.find()
    .then(characters => res.json(characters))
    .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req, res) => {
  Character.findOne({ _id: req.params.id })
    .then(character => res.json(character))
    .catch(err => res.status(400).json(err))
}

module.exports.create = (req, res) => {
  Character.create(req.body)
    .then(character => res.json(character))
    .catch(err => res.status(400).json(err))
}
module.exports.update = (req, res) => {
  Character.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(updatedCharacter => res.json(updatedCharacter))
    .catch(err => res.status(400).json(err))
}
module.exports.delete = (req, res) => {
  Character.deleteOne({ _id: req.params.id })
    .then(message => res.json(message))
    .catch(err => res.status(400).json(err))
}
