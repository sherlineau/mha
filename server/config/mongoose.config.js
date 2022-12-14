const mongoose = require('mongoose')
DATABASE = require('../server')

mongoose.connect(`mongodb://localhost/${DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('Something went wrong when connecting to the database ', err))