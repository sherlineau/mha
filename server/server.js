const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;
module.exports = DATABASE = 'myheroacademia_db';

// configs
require('./config/mongoose.config');
require('dotenv').config();
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO change routes to correct file name
// routes
require('./routes/test.routes')(app);
require('./routes/user.routes')(app);

// Listen
app.listen(port, () => { console.log(`Listening at Port ${port}`) });