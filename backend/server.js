// Terminal commands used to set up a mongodb using mongoose and docker
// npm init
// npm i express
// npm i mongoose
// Run server in background (docker)
// npm i dotenv
// npm i --save-dev nodemon (allows for live reloading of the server)
// npm i swagger-ui-express

const mongoose = require('mongoose');
let dbConnect = require('./dbConnect');
const express = require('express');
const allowCors  = require('./middleware/CORS')
const cors = require('cors')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./percs-api.json');
require('dotenv').config();


app.use(
 '/api-docs',
 swaggerUi.serve,
 swaggerUi.setup(swaggerDocument)
);
app.use(cors())
app.use(allowCors)

// parse requests of content-type - application/json
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Percs application.' })
});

let cardRoutes = require('./routes/cardRoutes')
let pinRoutes = require('./routes/pinRoutes')
// let stampRoutes = require('./routes/stampRoutes')
let tokenRoutes = require('./routes/tokenRoutes')
let userRoutes = require('./routes/userRoutes')
let vendorRoutes = require('./routes/vendorRoutes')

app.use('/cards', cardRoutes);
app.use('/pins', pinRoutes);
// app.use('/stamps', stampRoutes);
app.use('/tokens', tokenRoutes);
app.use('/users', userRoutes);
app.use('/vendors', vendorRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Percs' server is running on port ${PORT}.`)
});

// console.log('testing');
