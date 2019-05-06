const express = require("express");
const router = express.Router();
const Truck = require("../models/truck")

router.post('/truck', (req, res, next) => {
    console.log(req.body)
    //    Truck.create(req.body)
    //      .then(
    //        data => {console.log(data)})
    //      .catch(next)
   
   });
