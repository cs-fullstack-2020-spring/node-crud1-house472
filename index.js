//import express, create server and port

let express = require('express');
let app = express();
let port = 8600;

// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = "mongodb+srv://student:Datwho@91@cluster0-sq2pi.mongodb.net/cs_database?retryWrites=true&w=majority"
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//import and mount routes
let api = require('./routes/api')
app.use('/api', api)

//create listener

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
