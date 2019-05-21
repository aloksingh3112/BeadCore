const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const UserModel=require('../schema/userschema');
const validMiddleware=require('../middleware/token');


router.get('/getuser',[validMiddleware],async (req,res)=>{
try {
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

} catch (error) {
  return res.status(200).json({
    message:"something went wrong",
    err:error
  })
}



})

router.get('/logout',[validMiddleware],async (req,res)=>{

   try {
    const token=jwt.decode(req.headers.auth);
    const user=await UserModel.findOne({_id:token.data._id});
    user.logouttime=Date.now();
    user.logintime=null;
    const userResult=await user.save();
    return res.status(200).json({
      message:"logout succssfully",
      data:userResult,
      status:200
    })

   } catch (error) {
      return res.status(200).json({
        status:501,
        message:"something went wrong"
      })

   }


})


module.exports=router;
