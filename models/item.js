const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    // _id:{ type: Schema.Types.ObjectId, ref: 'Truck' },
    // truckId:
    item:{type: String, required:true},
    description:{type: String, required:true},
    price: {type: String, required:true},
    img: String
  })
  const Item = mongoose.model("Item", ItemSchema)
module.exports =Item;