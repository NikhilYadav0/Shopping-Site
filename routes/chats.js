const route=require('express').Router()
const Chat=require('../db').chats


route.get('/chats/:rec',(req,res)=>{
    Chat.findAll({ where: {
            $or: [
                {sender_username:req.user.username}, 
                {sender_username:req.params.rec}
            ],
            $or: [
                {reciever_username:req.user.username}, 
                {reciever_username:req.params.rec}
            ]
        }})
    .then((chats)=>{
        res.send(chats)
    })
    .catch((err)=>{
        res.send(err)
    })
})

route.post('/chat',(req,res)=>{
    Chat.create({
        sender_username:req.user.username,
        reciever_username:req.body.reciever_username,
        message:req.body.message
    }).then((chat)=>{
        res.send(chat)
    }).catch((err=>{
        res.send("Unable to save chat on db.")
    }))
})



module.exports=route