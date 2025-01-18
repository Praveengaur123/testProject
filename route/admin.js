const path=require('path')
const express=require('express')
console.log("Entered in Database");

const adminController=require('../controller/admin')
const router=express.Router()

// Serving the html file
router.get('/',adminController.getWebPage)

// insertin the entries
router.post('/add-info',adminController.addInfo)

// // deleting the entries
// router.delete('/delete-entries/:id',adminController.deleteEntries)
// // get the entriries
router.get('/get-info',adminController.getInfo)

// // updating
router.put('/edit-info/:id',adminController.updateInfo)
module.exports=router;