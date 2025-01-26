const mongoose = require("mongoose")

const baseurl = `mongodb://localhost:27017/Ecommerce_2024`

const connectDB = mongoose.connect(baseurl, {

}).then(() => {
    console.log("connection sucessful *** ")
}).catch((error) => {
    console.log(error)
})


module.exports = connectDB






