const express=require('express');
const router=express.Router();

const SignUpModel=require('../schema/userschema');
const bcrypt=require('bcryptjs');
const _=require('lodash');
const jwt =require('jsonwebtoken')


router.post('/signup',async (req,res)=>{
  try {
    const isEmail=await SignUpModel.findOne({email:req.body.email});
    if(isEmail){
      return res.status(200).json({
        message:"Email already exist",
        status:409
      })
    }
    const isUsername=await SignUpModel.findOne({username:req.body.username});
    if(isUsername){
      return res.status(200).json({
        message:"Username already exist",
        status:409
      })
    }
    const userModel=new SignUpModel({
      email:req.body.email,
      password:bcrypt.hashSync(req.body.password,10),
      username:req.body.username,


    })

    const userData=await userModel.save();

     return res.status(200).json({
       message:"user Registered successfully",
       status:200
     })

  } catch (error) {

    return res.status(501).json({
      message:"something went wrong",
      err:error
    })
  }


})

router.post('/login',async (req,res)=>{
  try {
      const user= await SignUpModel.findOne({username:req.body.username});
      if(!user){
        return res.status(200).json({
          message:"You are not registered",
          status:404
        })
      }

       if(!bcrypt.compareSync(req.body.password,user.password)){
        return res.status(200).json({
          message:"Wrong Credentials",
          status:403
        })
      }

    const token=jwt.sign({
       data:user
    },'aloksingh',{
      expiresIn:20000
    })

      return res.status(200).json({
        message:"You are login",
        status:200,
        token:token,
        data:user
      })




  } catch (error) {
    return res.status(501).json({
      message:"Login failed",
      err:error
    })
  }

})





module.exports=router;
