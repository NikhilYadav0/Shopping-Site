var id = location.search.split('=')[1]; //     this will give product_id
console.log('/product/'+id)
$.get('/product/'+id,(product)=>{
    console.log(product.description)
})
$.get('/comments/'+id,(comments)=>{
    var commentBox=$('#allcomments')
    for (index = 0; index < comments.length; index++) { 
            console.log(comments[index])
            commentBox.append(
                    `
                    <div class="card">
                            <div class="card-body mycard">
                                    ${comments[index].comment}
                            </div>
                    </div>
                    `
            )
    } 
})

$(()=>{
    var comment=$('#comment')
    comment.keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            alert('You pressed a "enter" key in textbox'); 
            $.post('/comment',{
                message:comment.val(),
                product_id:id
            },(res)=>{
                alert(res); 
            })
        }
    });
})