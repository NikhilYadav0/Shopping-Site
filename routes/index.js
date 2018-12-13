const express=require('express')
const route=express.Router()
const Comment=require('../db').comments
// route.use('/ifloggedin',require('./ifloggedin'))
route.use('/product',require('./product_detail'))
route.use('/',require('./login'))
module.exports=route