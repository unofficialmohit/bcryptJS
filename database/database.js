const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bcrypt')
.then(()=>{
    console.log("DATABASE CONNECTED");
})