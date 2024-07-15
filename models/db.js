const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0/webpro").then(()=>
    console.log("db connected")
)