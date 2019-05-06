const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TruckSchema= new Schema({
    // _id: Schema.Types.ObjectId,
    truck:{type: String, required:true},
    img:String,
    hours:{type: String, required:true},
    location:{type: String, required:true},
    menuItem:[{ type: Schema.Types.ObjectId, ref:"Item" }],
    // user:{ type: Schema.Types.ObjectId, ref: 'User' }
})

const Truck = mongoose.model("Truck", TruckSchema)

module.exports = Truck;