const express =require('express');
const User=require('../../models/user');
var jwt=require('jsonwebtoken');

module.exports=function(router){
    //GET:the 12 newest stand-up meeting notes
    router.get('/user',function(req,res){res.send("Heelllooooooooo")})
    


router.post('/user',function(req,res){
    console.log(req.body);
    let promise=User.findOne({email:req.body.email}).exec();
    promise.then(function(doc){
        if(doc){
            return res.status(501).json({message:"user already exists"});
        }
        else{
        let note = new User(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(501)
            }
            res.status(200).json(note)
        })}})
    promise.catch(function(err){
        return res.status(501).json({message:"something is fisshy"});
    })
    

})

router.post('/ulogin',function(req,res,next){
    let promise=User.findOne({email:req.body.email}).exec();
    console.log(promise);
    promise.then(function(doc){
        if(doc){
          console.log(req.body.pass);
          console.log(doc.pass);
          if(doc.pass==req.body.pass){
                 
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
router.get('/username',verifyToken,function(req,res,next){
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

