const express=require('express')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static('./public'))
app.use('/',require('./routes/index'))
app.listen(2706,()=>{
    console.log('localhost:2706')
})