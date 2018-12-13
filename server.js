const express=require('express')
const app= express()
const session=require('express-session')
const passport=require('./passport')
const Comment=require('./db').comments
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'somesecretstring'
}))

app.use(passport.initialize())
app.use(passport.session());


app.get('/new_prod',(req,res)=>{
    if(!(req.user)){
        res.redirect('/')
    }
    else{
        res.redirect('/new_product.html')
    }
})
app.use('/delete_product',require('./routes/delete'))

app.post('/comment',(req,res)=>{
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

app.get('/SignUp',(req,res)=>{
    if(!(req.user)){
        res.redirect('/')
    }
    else{
        res.redirect('/SignUp.html')
    }
})

app.use('/',express.static('./public'))
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
app.use('/',require('./routes/index'))

app.set('view engine','hbs')
app.set('views',__dirname+"/views")
app.use('/',(req,res)=>{
    res.render('error')
})
app.listen(2706,()=>{
    console.log('localhost:2706')
})