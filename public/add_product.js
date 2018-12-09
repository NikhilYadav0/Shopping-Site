$(()=>{
    let btn=$('#addProductBtn')
    let description=$('#pdescrip')
    let price=$('#price')
    
    // let photo=$('pphoto')
    let name=$('#pname')
    btn.click(()=>{
        addProduct(name.val(),description.val(),price.val(),()=>{
            window.alert('Product is now available for sale')
        })
    })
})