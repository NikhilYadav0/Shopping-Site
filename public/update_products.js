$(function(){
    let show=$('#item-posters')
    $.get('/product',(products)=>{
        for(product of products){
            const src="/uploads/"+product.product_id+".png"
            console.log(product.product_name+" "+product.description+" "+product.price)
            show.append(`
                <div class="card col-4 p-2 " style="width: 5rem;" id="${product.product_id}">
                    <div class="card-body">
                        <h5 class="casrd-title">${product.product_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.description}</h6>
                        <img src='${src}'>
                        <p class="card-text">${product.price}</p>
                        <a href="detail_product.html?product_id=${product.product_id}" class="card-link">||Details||</a>
                        <footer id="username" class="blockquote-footer"><b>${product.username}</b></footer>
                    </div>
                </div>
            `)
        }
    })
})