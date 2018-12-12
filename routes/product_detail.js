let express=require('express')
const fs=require('fs')
const path = require("path");
let route=express.Router()
const multer = require("multer");
const Product=require('../db').products

const upload = multer({
    dest: "../uploaded"
  });

route.get('/:id',(req,res)=>{
    Product.findOne({ where: {product_id: req.params.id}}).then((product)=>{
        res.send(product)
    }).catch((err)=>{
        res.send(err)
    })
})
route.get('/',(req,res)=>{
    Product.findAll().then((products)=>{
        res.send(products)
    }).catch((err)=>{
        res.send(err)
    })
})

route.post(
    "/",
    upload.single("product_photo" /* name attribute of <file> element in your form */),
    (req, res) => {
      console.log("********************"+req.user.username+"***************")
      const tempPath = req.file.path;
      Product.create({
            username:req.user.username,
            description:req.body.description,
            price:parseFloat(req.body.price),
            product_name:req.body.product_name
        })
        .then((product)=>{
            const targetPath = path.join(__dirname, "../public/uploads/"+product.product_id+".png");
            fs.rename(tempPath, targetPath, err => {
                if (err) throw err;
                console.log('Rename complete!');
            })
            res.status(200).redirect('/')
        })
        .catch((err)=>res.status(200).send(console.log(err)))
    })
    module.exports=route