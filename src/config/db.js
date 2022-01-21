const mongoose=require("mongoose")

module.exports=function()
{
    return mongoose.connect("mongodb+srv://web13:proj1723@cluster0.njfwk.mongodb.net/OnnBike")
}