const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const SignUpModel=require('../schema/signupschema');
const bcrypt=require('bcryptjs');
const _=require('lodash');


router.post('/signup',async (req,res)=>{
  try {
    const isEmail=await SignUpModel.findOne({email:req.body.email});
    if(isEmail){
      return res.status(200).json({
        message:"User already exist",
        status:409
      })
    }
    const userModel=new SignUpModel({
      email:req.body.email,
      password:bcrypt.hashSync(req.body.password,10),
      firstname:req.body.firstname,
      lastname:req.body.lastname

    })

    const userData=await userModel.save();
    const userDataResult=_.pick(userData,['_id',"email","firstname","lastname"])
     return res.status(200).json({
       message:"user Registered successfully",
       data:userDataResult
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
      const user= await SignUpModel.findOne({email:req.body.email});
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

      const userResult=_.pick(user,['_id','email','firstname','lastname']);
      return res.status(200).json({
        message:"You are login",
        data:userResult
      })




  } catch (error) {
    return res.status(501).json({
      message:"Login failed",
      err:error
    })
  }

})



module.exports=router;
