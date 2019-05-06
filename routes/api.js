const express = require ('express');
const router = express.Router();
const User = require('../models/user');
const Truck = require('../models/truck');
const passport = require("passport");
const Item = require("../models/item")


router.get('/profile', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  User.find({})
    .then(data => {res.json(data)})
    .catch(next)
});
router.post('/signup', passport.authenticate('local', {
  successRedirect: '/TruckLogin',
  failureRedirect: '/SignUp',
  failureFlash : true  
}));

router.post('/user', (req, res, next) => {
 console.log(req.body)
    User.create(req.body)
      .then(
        data => {console.log(data)})
      .catch(next)

});
router.get('/t')
router.post('/t', (req, res, next) => {
  console.log("r.b"+req.body)
     Truck.create(req.body)
       .then(
         data => {res.json(data) })
       .catch(next)
 
 });
 router.get('/t', (req, res, next) => {
   Truck.find().then(
     data=>{
       console.log("res 2"+res)
       res.json(data)
     }
   ).catch(next)
 })
 router.get('/truck/:name', (req, res, next) => {
   Truck.findOne({truck:req.params.name}).populate('menuItem').then(data=>{
     res.json(data)
   }).catch(next)
 })
 router.post('/item/:id', (req, res, next) => {
  console.log("reqbody"+req.body)
  console.log("reqparams"+req.params.id)
  console.log("resbodyid"+req)
  
    Item.create(req.body).then((function(data) {
       return(
           Truck.findOneAndUpdate({_id:req.params.id},{menuItem:data._id}, {new:true})
           ).then(data=>{res.json(data)})
       .catch(next)
    }))
  });
router.delete('/profile/:id', (req, res, next) => {
  User.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;
