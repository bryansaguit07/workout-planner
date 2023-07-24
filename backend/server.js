require('dotenv').config()
const express = require("express")
const workoutsRoutes = require('./routes/workout')

// express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(workoutsRoutes)

// port number
app.listen(process.env.PORT, () => {
    console.log("hello", process.env.PORT)
})

