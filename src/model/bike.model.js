const mongoose = require('mongoose')


const bikeSchema = new mongoose.Schema({
    brand:{type: String, required: true},
    model:{type: String, required: true},
    price:{type: Number, required: true},
    imageurl:{type:String, required: true},
    excessFee:{type: Number, required: true},
    type:{type: String, required: true}
},{
    timestamps:false,
    versionKey:false

})


module.exports =mongoose.model('bike',bikeSchema);