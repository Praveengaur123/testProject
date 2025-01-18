const path=require('path')

const Entries=require('../models/admin')
const { Sequelize, Op } = require('sequelize');

console.log("Entered in controller")
exports.addInfo=async(req,res)=>{
    console.log("add Entries")
    try{
        console.log("Here sending the data",req.body)
        if(req.body.playerName==undefined){
            throw new Error("Player Name is mandatory")
        }
        console.log("created entries: here is the generated ID",req.body.id);
        console.log("here is the career :", req.body.career)
        const data =await Entries.create({
            playerName:req.body.playerName,
            photoUrl:req.body.photoUrl,
            birthDate:req.body.birthDate,
            birthPlace:req.body.birthPlace,
            career:req.body.career,
            matches:req.body.matches,
            score:req.body.score,
            fifties:req.body.fifties,
            centuries:req.body.centuries,
            wickets:req.body.wickets,
            average:req.body.average
        })
        console.log("created entries",data);
        return res.status(201).json({newEntries:data})
    }
    catch(err){
        console.log("error in adding info",err.message);
        
    }
}
exports.getInfo=async(req,res)=>{
    console.log("getting the user")
    const query=req.query.query
    console.log("Here is the query",query)
    if(query.length===0) return res.status(400).json({err:"error"
    });
    try{
        console.log("Inside the try block:")
        const info=await Entries.findAll({
            where:{
            playerName:{
                [Sequelize.Op.like]:`%${query}%`,
            }, 
        },
    })
        res.status(200).json(info)
    }
    catch(err){
        console.log("get User is failed",JSON.stringify(err));
        res.status(500).json({err:err})
    }
}
exports.updateInfo=async(req,res)=>{
    console.log("Updating the data")
    const id=req.params.id
    const {playerName,photoUrl,birthDate,birthPlace,average,career,centuries,fifties,matches,score,wickets}=req.body
    try{
        const info=await Entries.findByPk(id)
        info.playerName=playerName
        info.photoUrl=photoUrl
        info.birthDate=birthDate
        info.birthPlace=birthPlace
        info.average=average
        info.career=career
        info.centuries=centuries
        info.fifties=fifties
        info.matches=matches
        info.score=score
        info.wickets=wickets
        await info.save()
        res.status(200).json(info)
    }
    catch(err){
        console.log("error updating entry",err)
        res.status(500).json({err:"Error updating Info"})
    }

}
exports.getWebPage=(req,res)=>{
res.sendFile(path.join(__dirname,'../views',"index.html"))
}