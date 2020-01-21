const express = require ('express');
const server = express();
const mongoose = require('mongoose');

const requireDir = require('require-dir');

//Connection
try{
    mongoose.connect('mongodb+srv://eduardo:163471878125@cluster0-nlvz7.azure.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology : true});
}catch(err){
    throw err;
}
server.use(express.json());

//Models
requireDir('./src/models');

//Routes
server.use('/api',require('./src/routes'));

server.listen(3008);
console.log('server ouvindo na porta 3008');