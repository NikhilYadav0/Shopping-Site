function addProduct(n,d,p,done) {
    $.post('/product',{
        name:n,
        description:d,
        price:p
    },(res)=>{
        done(res)
    })
}