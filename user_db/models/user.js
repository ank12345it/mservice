const mongoose=require('mongoose');
// const bcrypt = require('bcrypt-nodejs');

const userSchema=new mongoose.Schema({
    
    email:{type:String},
    pass:{type:String},
    c_pass:{type:String}   
    
})
// userSchema.statics.hashPassword=function hashPassword(pass){
//     return bcrypt.hashSync(pass,10);
// }
// userSchema.methods.isValid=function(hashedPassword){
//     return bcrypt.compareSync(hashedPassword,this.pass);
// }

module.exports=mongoose.model('User',userSchema)