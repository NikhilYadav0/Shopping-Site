const route=require('express').Router();
const Product=require('../db').products;
const Comment=require('../db').comments;
const fs=require('fs');

console.log('here----===================================================++++++++++++++++++++++++++++++++')

route.get('/:id',(req,res)=>{
    console.log('here----===================================================++++++++++++++++++++++++++++++++')
    if(req.user==null){
        res.redirect('/');
    }
    Product.findOne({where:{product_id:req.params.id}}).then((product)=>{
        if(product!=null){
            if(product.username==req.user.username){
                Product.destroy({where:{product_id:req.params.id}}).then((count)=>{
                    console.log(count+" product destroyed");
                    Comment.destroy({where:{product_id:req.params.id}}).then((count)=>{
                        console.log(count+" comment destroyed");
                        var path="c:\\Users\\nikhi\\OneDrive\\Documents\\Amazon\\public\\uploads\\" +req.params.id +".png";
                        console.log(path)
                        console.log("====================================================================================================================================================================")
                        fs.unlink(path, (err) => {
                            if (err) throw err;
                            console.log(path+' was deleted');
                            res.redirect('/');
                        });
                    })
                })
            }
        }
        res.redirect('/');
    }).catch((err)=>{
        return err;
    })
})
module.exports=route