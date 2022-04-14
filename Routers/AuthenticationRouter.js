// external
const express = require("express")
const router = express.Router()
const { body, param, query } = require("express-validator");

// internal
const controllers = require("../Controllers/AuthenticationController")

router.post("/login",
    [
        body("username").isAlpha().withMessage("login username must be string"),
        body("password").isAlphanumeric().withMessage("login password must be string and number only").isLength({ min: 8, max: 20 }).withMessage("login 8 < password > 20 length"),
    ]
    , controllers.login)
router.post("/register",
    [
        body("id").isInt().withMessage("register ID must be Integer"),
        body("fullName").isAlpha().withMessage("register name must be string").isLength({ min: 3, max: 20 }).withMessage("register 3 < name > 20 length"),
        body("password").isAlphanumeric().withMessage("register password must be string and number only").isLength({ min: 8, max: 20 }).withMessage("register 8 < password > 20 length"),
        body("email").isEmail().withMessage("register email must be email").isLength({ min: 8, max: 20 }).withMessage("register 3 < email > 20 length"),
        body("image").isAlphanumeric().withMessage("register image must be image"),

    ],
    controllers.register)


module.exports = router;