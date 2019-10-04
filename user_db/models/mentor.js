const mongoose=require('mongoose');
const mentorSchema=new mongoose.Schema({
    
        email:{type:String},
        contact:{type:String},
        pass:{type:String},
        c_pass:{type:String},
        tech:{type:String},
        exp:{type:String},
        sttime:{type:Date},
        entime:{type:Date}
})

module.exports=mongoose.model('Mentor',mentorSchema)