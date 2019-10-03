const express =require('express');
const Mentor=require('../../models/mentor');
var jwt=require('jsonwebtoken');
module.exports=function(router){
    //GET:the 12 newest stand-up meeting notes
    router.get('/mentor',function(req,res){res.send("Heelllooooooooo")})
    


router.post('/mentor',function(req,res){
    console.log(req.body);
    let note = new Mentor(req.body)
    note.save(function(err,note){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(note)
    })

})
router.post('/mlogin',function(req,res,next){
    let promise=Mentor.findOne({email:req.body.email}).exec();
    promise.then(function(doc){
        if(doc){
          if(req.body.pass){

              let token=jwt.sign({email:doc.email},'secret',{expiresIn:"3h"});
              return res.status(200).json(token);
          }
          else{
              return res.status(501).json({message:"invalid credentials"});
          }
        }
        else 
        {
            return res.status(501).json({message:"user does not exists"});
        }
    });
    promise.catch(function(err){
        return res.status(501).json({message:"something is fisshy"});
    })

})
router.get('/mentorname',verifyToken,function(req,res,next){
    return res.status(200).json(detoken.email);
 })
 var detoken='';
 function verifyToken(req,res,next){
     let token=req.query.token;
     jwt.verify(token,'secret',function(err,tokendata){
         if(err){
             return res.status(400).json({message:"unauthorised request"});
         }
         if(tokendata){
             detoken=tokendata;
             next();
 
         }
     })
 }
 }
 

