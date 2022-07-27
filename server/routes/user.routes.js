const UserController = require('../controllers/user.controller')

module.exports = (app) => {
  // get all users
  app.get('/api/users', UserController.getAllUsers)
  app.post('/api/users/register', UserController.register)
}