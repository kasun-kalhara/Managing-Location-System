const { request } = require("express");

const router = require("express").Router();
let location = require("../models/location");

router.route("/add").post((req,res)=>{

    const Name = req.body.Name;
    const Address = Number(req.body.Address);
    const Phone = req.body.Phone;

    const newlocation = new location({
        Name,
        Address,
        Phone
    })

    newlocation.save().then(()=>{
         res.json("Location added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    location.find().then((locations)=>{
        res.json(locations)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let locationid = req.params.id;
    

    await location.findByIdAndDelete(locationid)
    .then(()=>{
        res.status(200).send({status:"location delete"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status :"error with delete location",error:err.message});
    })


})



module.exports = router;