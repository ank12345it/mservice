const express =require('express')
const User=require('../../models/user')

module.exports=function(router){
    //GET:the 12 newest stand-up meeting notes
    router.get('/user',function(req,res){res.send("Heelllooooooooo")})
    


router.post('/user',function(req,res){
    console.log(req.body);
    let note = new User(req.body)
    note.save(function(err,note){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(note)
    })

})
}