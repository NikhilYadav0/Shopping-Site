const sequelize=require('sequelize')
// var SequelizeTokenify = require('sequelize-tokenify');

const db=new sequelize('amazon','developer','devPass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,max:5
    }
})
const Comments=db.define('comments',{
    username:{
        type:sequelize.STRING,
        allowNull:false
    },
    product_id:{
        type:sequelize.STRING,
        allowNull:false
    },
    comment:{
        type:sequelize.STRING,
        allowNull:false
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
    username:{
        type:sequelize.STRING,
        allowNull:false
    },
    product_id:{
        type:sequelize.UUID,
        defaultValue:sequelize.UUIDV1,
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
})
// SequelizeTokenify.tokenify(Products, {
//     field: 'product_id'
// });

db.sync().then(()=>console.log('db is synced')).catch(()=>console.log("db syncing error"))
module.exports={
    users:Users,
    products:Products,
    comments:Comments
}