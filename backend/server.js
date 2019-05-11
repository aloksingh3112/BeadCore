const express=require('express');
const mongooge=require('mongoose');
const bodyparser=require('body-parser');
const http=require('http');
const app=express();




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



const port= process.env.port||'3000';
app.set('port',port);

const server= http.createServer(app);
server.listen(port,()=>{
  console.log('connected to server'+port)
})
