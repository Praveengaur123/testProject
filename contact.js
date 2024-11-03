const express=require('express')

const path=require('path')

const rootDir=require('../util/path')

const router=express()

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','Contact-Us.html'))
})
router.post('/contact-us',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','succes.html'))
    
})
module.exports=router