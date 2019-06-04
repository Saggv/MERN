const express = require('express');
const mongoose = require('mongoose');

//require router
const Product = require('./Router/Product');
const Register = require('./Router/Register');
const Login = require('./Router/Login');
const Asset = require('./Router/Asset');

//connect with mongoose 
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true })

const app= express();
const port = 7000;

//body parser
const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/', Product);
app.use('/', Register);
app.use('/', Login);
app.use('/asset', Asset);

app.listen( port, ()=>console.log(`Sever start on ${port}`))