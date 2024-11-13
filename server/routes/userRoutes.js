const express = require("express")
const router = express.Router()

const {
    userRegister,
    userLogin
} = require("../controllers/userController")

router.post("/register", userRegister)

router.post("/login", userLogin)

router.get("/getProfile",validateJwtToken, userProfile)

// router.post("/login", loginUser)

module.exports = router