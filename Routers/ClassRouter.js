const { body, param } = require("express-validator");
const express = require("express");
const router = express.Router();

const controllers = require("./../Controllers/ClassController");

router.route("/class")
    .get(controllers.getAllClasses)
    .post(
        [
            body("id").isInt().withMessage("id must be integer"),
            body("name").isAlpha().withMessage("Name must be characters"),
            body("supervisor").isMongoId().withMessage("Invalid Supervisor"),
            body("children").isArray().withMessage("Children must be array"),
            body("children.*").isInt().withMessage("Invalid child ids"),
        ],
        controllers.createClass
    );
router.route("/class/:id")
    .get([param("id").isInt().withMessage("Id must be integer")], controllers.getClassById)
    .put([param("id").isInt().withMessage("Id must be integer")], controllers.updateClass)
    .delete([param("id").isInt().withMessage("Id must be integer")], controllers.deleteClass
    );

module.exports = router;
