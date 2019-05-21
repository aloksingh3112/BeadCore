const express=require('express');
const router=express.Router();
const UserModel=require('../schema/userschema');
const validMiddleware=require('../middleware/token');


router.get('/getuser',[validMiddleware],async (req,res)=>{

  const user=await UserModel.find();
  if(!user){
    return res.status(200).json({
      data:[],
      status:404
    })
  }

  return res.status(200).json({
    status:200,
    data:user
  })


})


module.exports=router;
