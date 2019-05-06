const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    user: {type: String, required:true},
    password: {type: String, required:true},
    truck: [{ type: Schema.Types.ObjectId, ref: 'Truck' }]
    
  });
// const TruckSchema= new Schema({
//     _id: Schema.Types.ObjectId,
//     truck:{type: String, required:true},
//     img:String,
//     // hours:{type: Date, required:true},
//     // location:{type: String, required:true},
//     menuItem:[{ type: Schema.Types.ObjectId, ref: 'MenuItem' }],
//     user:{ type: Schema.Types.ObjectId, ref: 'User' }
// })
// const ItemSchema = new Schema({
//   itemRef:{ type: Schema.Types.ObjectId, ref: 'Truck' },
//   item:{type: String, required:true},
//   description:{type: String, required:true},
//   price: {type: Number, required:true},
//   img: String
// })
const User = mongoose.model("User", UserSchema);
// const Truck = mongoose.model("Truck", TruckSchema)
// const Item = mongoose.model("Item", ItemSchema)
module.exports = User;
