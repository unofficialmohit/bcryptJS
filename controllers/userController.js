const userSchema=require('../models/userSchema')
const bcrypt=require('bcrypt');
module.exports.uploadInfo=async(req,res)=>{

    const {username,email,password}=req.body;
    //moved this bcrypt part to userSchema 
    // const SALT_VALUE=10;
    // const password=await bcrypt.hash(req.body.password,SALT_VALUE);
    // console.log(email);
    const databaseEmail=await userSchema.findOne({email:email});
    // console.log(databaseEmail)
    if(databaseEmail?.email==email)
    {
       return res.status(404).send('EMAIL ALREADY EXISTS') 
    }
    const newUserSchema= new userSchema({username,email,password});
    await newUserSchema.save();
    res.json(await userSchema.find());
}
module.exports.displayInfo=async (req,res)=>{
    res.send(await userSchema.find());
}
module.exports.login=async(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    const Details=await userSchema.findOne({email});
    console.log(Details);
    if(!Details?.email){
        return res.status(400).send({message:'DETAILS NOT FOUND, PLEASE SIGNUP'});
    }
    const isPasswordValid=await bcrypt.compare(password,Details?.password);
    if(isPasswordValid)
    {
        return res.status(200).send({message:'LOGIN SUCCESSFULL'});
    }
    else{
        
        res.send({message:'WRONG PASSWORD'})
    }
}
