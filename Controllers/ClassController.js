const { validationResult } = require("express-validator");


module.exports.getAllClasses = (request, response) => {
    response.status(200).json({
        message: "Get all classes",
    });
};

module.exports.getClassById = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result
            .array()
            .reduce((sum, error) => sum + error.msg + " ", "");

        throw new Error(errorMessages);
    }
    response.status(200).json({ message: "Get class by id" });
};

module.exports.createClass = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result
            .array()
            .reduce((sum, error) => sum + error.msg + " ", "");

        throw new Error(errorMessages);
    }
    response.status(201).json({ message: "create class" });
};

module.exports.updateClass = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result
            .array()
            .reduce((sum, error) => sum + error.msg + " ", "");

        throw new Error(errorMessages);
    }

    response.status(200).json({
        message: "update class",
    });
};

module.exports.deleteClass = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result
            .array()
            .reduce((sum, error) => sum + error.msg + " ", "");

        throw new Error(errorMessages);
    }
    response.status(200).json({
        message: "delete class",
    });
};
