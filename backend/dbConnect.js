'use strict';
const mongoose = require('mongoose');

const uri = process.env.DB_URI || "mongodb://127.0.0.1/percsDB";
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect to MongoDB
mongoose.connect(uri, mongooseOptions)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.error('MongoDB Error:', error.message));

// Get the default connection
const dbConnect = mongoose.connection;


module.exports = dbConnect;