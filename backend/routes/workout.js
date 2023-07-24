const express = require('express')


const router = express.Router()

router.get("/", () =>{
    res.json({mssg: "welcome"})
})


module.exports = router