const mongoose=require('mongoose');
const { type } = require('os');

const restaurantSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    }
});
const rest=mongoose.model('rest',restaurantSchema);
module.exports=rest;

const menuSchema=new mongoose.Schema({
    DishName:{
        type:String,
        required:true
    },
    Cost:{
        type:Number,
        required:true
    }
});
const menu=mongoose.model('menu',menuSchema);
module.exports=menu;