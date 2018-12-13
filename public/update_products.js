$(function(){
    $('.hide-chat-box').click(function(){
            $('.chat-content').slideToggle();
    });
    $('.displaynone').click(function(){
        $('#chat-main').hide();
    });
    let chatMain=$('#chat-main')
    let show=$('#item-posters')
    var username="";
    // To load all the comments into chat-box
    show.on('click','.messageIcon',function (){
        var name=$('#chat-with')
        chatMain.show()
        name.html($(this).data('name'))
        console.log($(this).data('name'))
        username=$(this).data('name')
        $.get('/chats/'+$(this).data('name'),(chats)=>{
            var chatlist=$('#chatlist')
            console.log(chats);
            chatlist.empty()
            for(i=0;i<chats.length;i++){
                if(chats[i].sender_username!==username){
                    chatlist.append(
                        `
                        <li class="pl-2 pr-2 bg-primary rounded text-white text-center send-msg mb-1">
                            ${chats[i].message}
                        </li>`
                    )
                }
                else{
                    chatlist.append(`
                        <li class="p-1 rounded mb-1">
                            <div class="receive-msg">
                                <img src="/uploads/${chats[i].reciever_username}.png">
                                <div class="receive-msg-desc  text-center mt-1 ml-1 pl-2 pr-2">
                                    <p class="pl-2 pr-2 rounded">${chats[i].message}</p>
                                </div>
                            </div>
                        </li>`
                    )
                }
            }
        })
    })
    $('#chatMessage').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            console.log('--------------------------------------')
            console.log(username)
            console.log('--------------------------------------')
            $.post('/chat',{
                reciever_username:username,
                message:$('#chatMessage').val()
            },(res)=>{
                alert("posted"); 
            })
        }
    });


    $.get('/product',(products)=>{
        for(product of products){
            const src="/uploads/"+product.product_id+".png"
            console.log(product.product_name+" "+product.description+" "+product.price)
            show.append(`
                <div class="card col-4 p-2 mt-3 " id="${product.product_id}">
                    <div class="card-body father server-action-menu">
                        <h5 class="casrd-title">${product.product_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${product.description}</h6>
                        <img src='${src}'>
                        <p class="card-text">${product.price}</p>
                        <a href="detail_product.html?product_id=${product.product_id}" class="card-link">||Details||</a>
                        <footer id="username" class="blockquote-footer"><b>${product.username}</b></footer>

                        <img src="/images/chat.png" height="20px" width="20px" class="son messageIcon" 
                            style="right:30px;" data-name=${product.username}>
                
                        <a href="/delete_product/${product.product_id}">
                         <img src="/images/delete.jpg" height="20px" width="20px" class="son" }">
                        </a>
                    </div>
                </div>
            `)
        }
    })

})