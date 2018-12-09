const express=require('express')
const route=express.Router()
const Product=require('../db').products


route.get('/',(req,res)=>{
    Product.findAll().then((products)=>{
        res.send(products)
    }).catch((err)=>{
        res.send(err)
    })
})

// To get the product with given id
// route.get('/:id',(req,res)=>{

// })

route.post('/',(req,res)=>{
    Product.create({
        description:req.body.description,
        price:parseFloat(req.body.price),
        product_name:req.body.name
    }).then((product)=>{
        res.status(200).send(product)
    }).catch((err)=>res.status(200).send(console.log(err)))
    
},)
module.exports=route