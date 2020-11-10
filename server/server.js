const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');


const app = express();

//bodyparser middleware
app.use(express.json());

//DB config
const db = config.get('mongoURI');

//Connect to Mongo
mongoose
    .connect(db, {
        useUnifiedTopology: true, 
        useNewUrlParser: true,
        useCreateIndex: true
     })
    .then(() => console.log('MongoDb Connecteddd...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));