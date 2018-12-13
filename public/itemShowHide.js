$(()=>{
    const formLogin=$('#login')
    const formLogout=$('#logout')
    const welcome=$('#welcome')
    const username=$('#username')
    const signup=$('#signup')
    $.get('/checkIfLoggedIn',(res)=>{
        console.log(res.loggedIn+"")
        if(res.loggedIn){
            signup.hide();
            formLogin.hide();
            welcome.show();
            welcome.append(res.user.firstname);
            formLogout.show();
        }
        else{
          signup.show();
          welcome.hide();
          formLogout.hide();
        }
    })
    formLogout.click(()=>{
          $.get('/logout',(res)=>{
          welcome.hide();
          formLogout.hide();
          formLogin.show();
          signup.show();
      })
    }) 
  })