const User = require("../models/users.model");

// define a class with all of our functions
class UserController {
  getAllUsers = (req, res) => {
    User.find()
      .then((allUsers) => res.json(allUsers))
      .catch((err) => res.json(err));
  };

  register = (req, res) => {
    User.create(req.body)
      .then((user) => {
        res.json({ msg: "success", user: user });
      })
      .catch((err) => res.json(err));
  };
}

// export a new instance of the class -> this way we do not have to copy module.exports for each route function we need
module.exports = new UserController();
