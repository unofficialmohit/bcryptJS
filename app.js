const express=require('express');
require('./database/database')
const router=require('./routes/routes')
const app=express();
app.use(express.json());
const PORT=786;
app.use('/api/ver/1',router);
app.listen(PORT,()=>{
    console.log("APP LISTENING TO "+PORT)
})