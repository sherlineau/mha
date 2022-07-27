const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
module.exports = DATABASE = 'myheroacademia_db'; //mongoose database name 

// config- Mongoose
require('./config/mongoose.config');

//config - Express
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// TODO change routes to correct file name
// routes
require('./routes/mha_character.routes')(app);
require('./routes/user.routes')(app);

// Listen
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log(`Listening at PORT ${PORT}`) });