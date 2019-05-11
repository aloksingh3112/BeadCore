const express=require('express');
const mongooge=require('mongoose');
const bodyparser=require('body-parser');
const http=require('http');
const app=express();
const authRoute=require('./routes/auth');

mongooge.connect('mongodb://amtica:alok3112@ds145892.mlab.com:45892/amtica',{ useNewUrlParser: true },()=>{
  console.log("database connected")
})


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/auth',authRoute);

const port= process.env.port||'3000';
app.set('port',port);

const server= http.createServer(app);
server.listen(port,()=>{
  console.log('connected to server'+port)
})
