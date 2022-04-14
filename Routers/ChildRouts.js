// external 
const express = require("express");
const { body, param, query } = require("express-validator");

// internal
const router = express.Router();
const controller = require("./../Controllers/ChildController");


router.get("/child", controller.getAllChild)
router.post("/child",
    [
        // _id(objectID), fullname, password, email, image(which is string)
        // body("id").isObject().withMessage("child ID must be Integer"),
        body("id").isInt().withMessage("child ID must be Integer"),
        body("fullName").isAlpha().withMessage("child name must be string").isLength({ min: 3, max: 20 }).withMessage("child 3 < name > 20 length"),
        body("age").isInt().withMessage("child age must be string int"),
        body("level").custom((level) => { return ["KG1", "KG2"].includes(level); }).withMessage("level not KG1 or  KG2"),
        body("address[city]").isAlpha().withMessage("child city must be image"),
        body("address[street]").isAlpha().withMessage("child street must be image"),
        body("address[building]").isAlpha().withMessage("child building must be image"),

    ]
    , controller.createChild)

router.route("/child/:id")
    .get(controller.getChildByID)
    .put(
        [
            body("id").isInt().withMessage("child ID must be Integer"),
            body("fullName").isAlpha().withMessage("child name must be string").isLength({ min: 3, max: 20 }).withMessage("child 3 < name > 20 length"),
            body("password").isAlphanumeric().withMessage("child password must be string and number only").isLength({ min: 8, max: 20 }).withMessage("child name < 8 length"),
            body("email").isEmail().withMessage("child email must be email").isLength({ min: 8, max: 20 }).withMessage("child 3 < email > 20 length"),
            body("image").isAlphanumeric().withMessage("child image must be image"),
        ]
        , controller.updateChild)
    .delete(controller.deleteChild)





//to exports router to server
module.exports = router;