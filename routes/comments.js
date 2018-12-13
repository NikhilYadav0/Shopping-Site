const route=require('express').Router()
const Comment=require('../db').comments


route.get('/comments/:id',(req,res)=>{
    Comment.findAll({ where: {product_id: req.params.id}}).then((comments)=>{
        res.send(comments)
    }).catch((err)=>{
        res.send(err)
    })
})

route.post('/comment',(req,res)=>{
    Comment.create({
        username:req.user.username,
        product_id:req.body.product_id,
        comment:req.user.firstname+" : "+req.body.message
    }).then((comment)=>{
        res.send("GOOD")
    }).catch((err=>{
        res.send("BAD")
    }))
})



module.exports=route