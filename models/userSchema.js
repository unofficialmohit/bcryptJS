const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=mongoose.Schema({
username:String,
email:String,
password:String,
})
//secure 
userSchema.pre('save',async function(){
// console.log("PRE DATA ",this);
const user=this;
const saltRound=await bcrypt.genSalt(10);
const hash_pasword=await bcrypt.hash(user.password,saltRound);
user.password=hash_pasword;
})
module.exports=mongoose.model('Bcrypt',userSchema);