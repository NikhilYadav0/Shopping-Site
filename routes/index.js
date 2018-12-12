const express=require('express')
const route=express.Router()
const Comment=require('../db').comments
// route.use('/ifloggedin',require('./ifloggedin'))
route.use('/product',require('./product_detail'))
route.get('/comments/:id',(req,res)=>{
    Comment.findAll({ where: {product_id: req.params.id}}).then((comments)=>{
        res.send(comments)
    }).catch((err)=>{
        res.send(err)
    })
})

route.use('/',require('./login'))
module.exports=route