const express=require('express');
const ejs=require('ejs');

const app=express()
const Bike=require("./model/bike.model.js")
const bikecontroller=require("./controller/bike.controller.js")


app.use(express.json())
app.use(express.static("public"))


app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))

app.use('/bike',bikecontroller)
app.get("/home",async(req,res)=>{

 
    return res.render("bikedisplay")

})


module.exports=app;
