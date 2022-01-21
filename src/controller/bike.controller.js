const express = require('express'); //



// const app = express();
const Bike=require("../model/bike.model.js")
const router =express.Router();


router.get("",async(req,res)=>{
    try{
        const bike=await Bike.find().lean().exec();
        res.status(201).send(bike);
    }catch(e)
    {
        res.status(500).send(e.message)
    }
})

router.post("",async(req, res)=>{
    try{
        const bike=await Bike.create(req.body);
        return res.status(201).send(bike);
    }catch(err){

        return res.status(500).send(err);
    }
})

module.exports=router;