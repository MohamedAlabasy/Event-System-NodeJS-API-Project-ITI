// external 
const { validationResult } = require("express-validator");

// internal


module.exports.login = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(200).json({ message: "login successfully", data: request.body });
}

module.exports.register = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(200).json({ message: "register successfully", data: request.body });
}