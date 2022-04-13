// out
const express = require("express");
const { body, param, query } = require("express-validator");


// my
const router = express.Router();
const controller = require("./../Controllers/TeachersController");



router.route("/teachers")
    .get(controller.getAllTeacher)
    .post(
        [
            // _id(objectID), fullname, password, email, image(which is string)
            // body("id").isObject().withMessage("teacher ID must be Integer"),
            body("id").isInt().withMessage("teacher ID must be Integer"),
            body("fullName").isAlpha().withMessage("teacher name must be string").isLength({ min: 3, max: 20 }).withMessage("teacher 3 < name > 20 length"),
            body("password").isAlphanumeric().withMessage("teacher password must be string and number only").isLength({ min: 8, max: 20 }).withMessage("teacher password < 8 length"),
            body("email").isEmail().withMessage("teacher email must be email").isLength({ min: 8, max: 20 }).withMessage("teacher 3 < email > 20 length"),
            body("image").isAlphanumeric().withMessage("teacher image must be image"),

        ]
        , controller.createTeacher)
    .put(
        [
            // body("id").isInt().withMessage("teacher ID must be Integer"),
            // body("fullName").isAlpha().withMessage("teacher name must be string").isLength({ min: 3, max: 20 }).withMessage("teacher 3 < name > 20 length"),
            // body("password").isAlphanumeric().withMessage("teacher password must be string and number only").isLength({ min: 8, max: 20 }).withMessage("teacher name < 8 length"),
            // body("email").isEmail().withMessage("teacher email must be email").isLength({ min: 8, max: 20 }).withMessage("teacher 3 < email > 20 length"),
            // body("image").isAlphanumeric().withMessage("teacher image must be image"),
        ]
        , controller.updateTeacher)
    .delete()






//to exports router to server
module.exports = router;