const express=require('express')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static('./public'))
app.use('/',require('./routes/index'))
app.use('/',(req,res)=>{
    res.send( `<head>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
        <style>
            body{
                background:pink;
            }
            <title>Page Not Found</title>
        </style>
    </head><body>
        <br>
        <div class="mx-auto" style="width: max-content;">
            <img src="images/error404.gif"><br>
        </div>
    </body>`)
})
app.listen(2706,()=>{
    console.log('localhost:2706')
})