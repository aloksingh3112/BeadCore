const mongoose=require('mongoose');

const SignUpSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    isLogin:{type:Boolean,default:false}

})

module.exports=mongoose.model('SignUpModel',SignUpSchema);
