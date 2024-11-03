const express=require('express')

const path =require('path')

const rootDir=require('../util/path')

const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    //next() // allow the request to continue to the next middleware in line 
    })  
router.post('/add-product', (req,res,next)=>{
    // console.log('In the another middleware');
    console.log(req.body);
     res.redirect('/shop');
 })

module.exports=router