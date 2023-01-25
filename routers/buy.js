const express = require("express")
const bcryptjs = require("bcryptjs")

const router = express.Router();


router.get('/', async(req,res)=>{
    try {
        res.json(req.user)
        // can use id to get any customer from data base
    } catch (error) {
        res.send(error)
    }

})

module.exports = router