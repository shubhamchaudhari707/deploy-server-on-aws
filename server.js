const express = require("express")
const app = express()
const dotenv = require('dotenv').config();
const connectDB = require("./db/conn")
const userRoutes = require("./routes/userRoutes")


app.use(express.json());
connectDB

app.use("/", userRoutes)


app.listen(process.env.port, () => {
    console.log(`server is running on localhost port ${process.env.port}`)
})








