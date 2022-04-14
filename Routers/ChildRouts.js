// external 
const express = require("express");
const { body, param, query } = require("express-validator");

// internal
const router = express.Router();
const controller = require("./../Controllers/ChildController");


router.get("/child", controller.getAllChild)
router.post("/child", createValidation("child"), controller.createChild)

router.route("/child/:id")
    .get([
        param("id").isInt().withMessage("child name must be integer"),
    ], controller.getChildByID)
    .put(createValidation("child"), controller.updateChild)
    .delete(controller.deleteChild)


function createValidation(_type) {
    return [
        param("id").isInt().withMessage(`${_type} name must be integer`),
        // body("id").isInt().withMessage(`${_type} ID must be Integer`).isMongoId().withMessage(`${_type} ID must be object`),
        body("fullName").isAlpha().withMessage(`${_type} name must be string`).isLength({ min: 3, max: 20 }).withMessage(`${_type} 3 < name > 20 length`),
        body("age").isInt().withMessage(`${_type} age must be string int`),
        body("level").custom((level) => { return ["KG1", "KG2"].includes(level); }).withMessage(`${_type} level not KG1 or  KG2`),
        body("address[city]").isAlpha().withMessage(`${_type} city must be image`),
        body("address[street]").isAlpha().withMessage(`${_type} street must be image`),
        body("address[building]").isAlpha().withMessage(`${_type} building must be image`),
    ]
}



//to exports router to server
module.exports = router;