const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    
    email:{type:String},
    pass:{type:String},
    c_pass:{type:String}   
    
})

module.exports=mongoose.model('User',userSchema)