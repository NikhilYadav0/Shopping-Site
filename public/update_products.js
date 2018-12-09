$(function(){
    let show=$('#item-posters')
    $.get('/product',(products)=>{
        for(product of products){
            console.log(product.product_name+" "+product.description+" "+product.price)
            show.append(`
                <div class="card col-4 m-3 p-3 " style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="casrd-title">${product.product_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.description}</h6>
                        <img src='.images\hplaptop.jpg'>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="card-link">||Details||</a>
                    </div>
                </div>
            `)
        }
    })
})