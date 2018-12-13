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
    res.redirect('/new_product.html')
})
app.use('/',require('./routes/chats'))
app.use('/delete_product',require('./routes/delete'))
app.use('/',require('./routes/comments'))
app.use('/',express.static('./public'))
app.use('/',require('./routes/index'))


app.set('view engine','hbs')
app.set('views',__dirname+"/views")
app.use('/',(req,res)=>{
    res.render('error')
})


app.listen(2706,()=>{
    console.log('localhost:2706')
})