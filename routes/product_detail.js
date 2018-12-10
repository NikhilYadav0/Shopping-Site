let express=require('express')
const fs=require('fs')
const path = require("path");
let route=express.Router()
const multer = require("multer");
const Product=require('../db').products

const upload = multer({
    dest: "../uploaded"
  });

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
      console.log(req.body)
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, "../public/uploads/"+req.body.product+".png");
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);
          Product.create({
            description:req.body.description,
            price:parseFloat(req.body.price),
            product_name:req.body.product_name
        }).then((product)=>{
            res.status(200).send(product)
        }).catch((err)=>res.status(200).send(console.log(err)))
        });
    }
  )


// route.post('/',(req,res)=>{
//     Product.create({
//         description:req.body.description,
//         price:parseFloat(req.body.price),
//         product_name:req.body.name
//     }).then((product)=>{
//         res.status(200).send(product)
//     }).catch((err)=>res.status(200).send(console.log(err)))
    
// },)





module.exports=route