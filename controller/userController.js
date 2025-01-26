const User = require("../models/userModels")


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const user = await User.create({ name, email, password })

        console.log(user)

        res.status(201).send({
            message: "user created sucessfully",
            "data": user
        })


    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}

const getUser = async (req, res) => {
    try {


        // const user = await User.find({})

        const user = {
            "name": "shubham",
            "email": "shubham@gmail.com"
        }

        res.status(201).send({
            message: "user fetched sucessfully",
            "data": user
        })


    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
}


module.exports = { registerUser, getUser }
