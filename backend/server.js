const express=require('express');
const mongooge=require('mongoose');
const bodyparser=require('body-parser');
const http=require('http');
const app=express();
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');


mongooge.connect('mongodb://amtica:alok3112@ds145892.mlab.com:45892/amtica',{ useNewUrlParser: true },()=>{
  console.log("database connected")
})


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Auth');
  res.setHeader('Access-Control-Allow-Methods', 'POST,PUT, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/auth',authRoute);
app.use('/user',userRoute);

const port= process.env.port||'3000';
app.set('port',port);

const server= http.createServer(app);
server.listen(port,()=>{
  console.log('connected to server'+port)
})



