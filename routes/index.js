const express=require('express')
const route=express.Router()

route.use('/product',require('./product_detail'))
module.exports=route