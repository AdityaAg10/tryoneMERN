require('dotenv').config(); // Load environment variables from the .env file
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://adityaagarwal:QJ0MEZuVakDRRoYl@cluster69.otm3agd.mongodb.net/Project_1", { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo db connected successfully');
});

connection.on('error', (err) => {
    console.log('Mongo db connection error: ', err);
});

module.exports = mongoose;
