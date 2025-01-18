const Sequelize=require('sequelize')

const sequelize=require('../util/database')
console.log("Entered in database")
const Information=sequelize.define('playerInfo',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    playerName:{
        type:Sequelize.STRING,
        allownull:false,
        primaryKey:true   
    },
    photoUrl:{
        type:Sequelize.STRING,
        allownull:false
    },
    birthDate:{
        type:Sequelize.STRING,
        allownull:false
    },
    birthPlace:{
        type:Sequelize.STRING,
        allownull:false
    },
    career:{
        type:Sequelize.TEXT,
        allownull:false
    },
    matches:{
        type:Sequelize.INTEGER,
        allownull:false
    },
    score:{
        type:Sequelize.INTEGER,
        allownull:false
    },
    fifties:{
        type:Sequelize.INTEGER,
        allownull:false
    },
    centuries:{
        type:Sequelize.INTEGER,
        allownull:false
    },
    wickets:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    average:{
        type:Sequelize.DOUBLE,
        allownull:false
    }

},
{
    
})
module.exports=Information