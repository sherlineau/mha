const CharacterController = require('../controllers/mha_character.controller')
const { authenticate } = require('../config/jtw.config')

module.exports = app => {
  // public
  app.get(`/api/people`, CharacterController.getAll)
  app.get(`/api/people/:id`, CharacterController.getOne)

  // admin only
  app.post(`/api/people`, authenticate, CharacterController.create)
  app.put(`/api/people/:id`, authenticate, CharacterController.update)
  app.delete(`/api/people/:id`, authenticate, CharacterController.delete)
}