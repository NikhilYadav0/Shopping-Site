let express=require('express')
const fs=require('fs')
const path = require("path");
let route=express.Router()
const multer = require("multer");
const User=require('../db').users
const passport = require('../passport')

const upload = multer({
    dest: "../uploaded"
  });

// route.get('/',(req,res)=>{
//     User.findAll().then((users)=>{
//         res.send(users)
//     }).catch((err)=>{
//         res.send(err)
//     })
// })

route.get('/checkIfLoggedIn', (req,res)=>{
    console.log("INGET")
    if((req.user)){
        res.send({
            loggedIn:true,
            user:req.user
        })
    }
    else{
        res.send({
            loggedIn:false
        })
    }
})

route.post('/login', passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/'
}))

route.post(
    "/signup",
    upload.single("dp" /* name attribute of <file> element in your form */),
    (req, res) => {
      console.log(req.body)
      const tempPath = req.file.path;
      const targetPath = path.join(__dirname, "../public/uploads/"+req.body.username+".png");
        fs.rename(tempPath, targetPath, err => {
          if (err) return handleError(err, res);
          User.create({
            phone:req.body.phone,
            lastname:req.body.lastname,
            firstname:req.body.firstname,
            mailId:req.body.mailId,
            password:req.body.password,
            username:req.body.username
        }).then((user)=>{
            res.status(200).send(user)
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