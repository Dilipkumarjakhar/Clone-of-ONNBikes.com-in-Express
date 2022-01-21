const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email:{type: String, required: true,unique: true},
    password:{type: String, required: true,unique:true},
    mobile:{type: Number, required: true,unique: true},
})

userSchema.pre("save", async function(next){
    if(this.isModified){
               console.log(this.password);
               this.password=await bcrypt.hash(this.password,10);
               console.log(this.password);
               
        next();
    }
})

module.exports =mongoose.model('user',userSchema);