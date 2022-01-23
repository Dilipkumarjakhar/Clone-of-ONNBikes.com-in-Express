const express=require('express');
const ejs=require('ejs');
const path=require('path');
const bcrypt = require('bcryptjs')
const Register=require('./model/user.model')

const app=express()
const Bike=require("./model/bike.model.js")
const bikecontroller=require("./controller/bike.controller.js")


app.use(express.json())
app.use(express.static("public"))


app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))

app.use('/bike',bikecontroller)
app.get("/bikedisplay",async(req,res)=>{

 
    return res.render("bikedisplay")

})

app.get("/bikedetails/:key",async(req,res)=>
{
    const bikeinfo=await Bike.findById(req.params.key);
    console.log(bikeinfo)
    return res.render("bikedetails",{bikeinfo:bikeinfo})
})

// dilip         
app.use("/home",(req,res)=>{
    res.render("home")
})
app.use("/faq",(req,res)=>{
    res.render("Faq")
})

app.use("/safety",(rreq,res)=>{
    res.render('safety')
})


// user register            


app.post("/register",async(req,res)=>{
    try{
        const storuserdata=new Register({
            firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  email: req.body.email,
                  password: req.body.password,
                  mobile:req.body.mobile
              })
     const register=await storuserdata.save();
     res.sendStatus(201).render("/home");
        }catch(err){
    return res.status(500).send(err);
    
}
})

app.post('/login',async(req,res)=>{
try{

    const email=req.body.email;
    const password=req.body.password;
    // console.log(`${email} and ${password}`)

    const data_base_pass=await  Register.findOne({email:email})
     
    const ismatch=await bcrypt.compare(password,data_base_pass.password)
     console.log('ismatch:', ismatch)
     if(ismatch){
        res.status(201).render("/home");
        // res.send("login successful");
        // res.status(201).render("/");
    }
    else{
        res.send("Invalid password")
    }
     }catch(err){
    return res.status(400).send("Invalid login Details");

}
})

module.exports=app;
