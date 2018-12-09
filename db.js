const sequelize=require('sequelize')
const db=new sequelize('amazon','developer','devPass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,max:5
    }
})
const Users = db.define('users',{
    username:{
        type:sequelize.STRING,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    },
    firstname:{
        type:sequelize.STRING,
        allowNull:false
    },
    lastname:{
        type:sequelize.STRING,
        allowNull:false
    },
    phone:{
        type:sequelize.STRING,
        allowNull:false
    },
    mailId:{
        type:sequelize.STRING,
        allowNull:false
    },
})

const Products=db.define('products',{
    product_id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    price:{
        type:sequelize.FLOAT,
        allowNull:false
    },
    description:{
        type:sequelize.STRING,
        allowNull:false
    },
    product_name:{
        type:sequelize.STRING,
        allowNull:false
    }
    // ,
    // image:{
    //     type:sequelize.BLOB('long')
    // }

})

db.sync().then(()=>console.log('db is synced')).catch(()=>console.log("db syncing error"))
module.exports={
    users:Users,
    products:Products
}