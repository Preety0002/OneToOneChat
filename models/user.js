const mongoose=require("mongoose")
const plm=require("passport-local-mongoose")

const userschema= new mongoose.Schema({
   username:String,
   password:String,
   profileimage:{
    type:String,
    default:"/images/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg"
   },
   socketId:String
})

userschema.plugin(plm);
module.exports=mongoose.model("user",userschema)