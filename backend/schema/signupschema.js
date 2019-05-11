const mongoose=require('mongoose');

const SignUpSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true}

})

module.exports=mongoose.model('SignUpModel',SignUpSchema);
