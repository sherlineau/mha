const UserController = require("../controllers/user.controller")
const { authenticate } = require('../config/jtw.config')

module.exports = app => {
  app.post(`/api/getAll`, authenticate, UserController.allUsers)
  app.post(`/api/register`, UserController.register)
  app.post(`/api/login`, UserController.login)
  app.get(`/api/logout`, UserController.logout)
}