// external 
const express = require("express");
const { body, param, query } = require("express-validator");

// internal
const router = express.Router();
const controller = require("./../Controllers/TeachersController");


//ask eng.eman about that .. ?
router.get("/teachers", controller.getAllTeacher)
router.post("/teachers", createValidation("teacher"), controller.createTeacher)

router.route("/teachers/:id")
    .get([
        param("id").isInt().withMessage("child name must be integer"),
    ], controller.getTeacherByID)
    .put(createValidation("teacher"), controller.updateTeacher)
    .delete(controller.deleteTeacher)

function createValidation(_type) {
    return [
        param("id").isInt().withMessage(`${_type} name must be integer`),
        // body("id").isInt().withMessage(`${_type} ID must be Integer`).isMongoId().withMessage(`${_type} ID must be object`),
        body("fullName").isAlpha().withMessage(`${_type} name must be string`).isLength({ min: 3, max: 20 }).withMessage(`${_type} 3 < name > 20 length`),
        body("password").isAlphanumeric().withMessage(`${_type} password must be string and number only`).isLength({ min: 8, max: 20 }).withMessage(`${_type} 8 < password > 20 length`),
        body("email").isEmail().withMessage(`${_type} email must be email`).isLength({ min: 8, max: 20 }).withMessage(`${_type} 3 < email > 20 length`),
        body("image").isAlphanumeric().withMessage(`${_type} image must be image`),
    ]
}



//to exports router to server
module.exports = router;