const { registerUser, getUser } = require("../controller/userController")


const express = require("express")
const router = express.Router()

router.post("/register", registerUser)
router.get("/", getUser)


module.exports = router












