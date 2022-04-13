//out 
const { validationResult } = require("express-validator");



//  to get all teachers
module.exports.getAllTeacher = (request, response, next) => {
    console.log(request.query);
    console.log(request.params);
    response.status(200).json({ data: "list of All Teacher" });
}

// to create new Teacher
module.exports.createTeacher = (request, response, next) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(201).json({ data: "add new teacher successfully ", body: request.body })
}

// to update new Teacher
module.exports.updateTeacher = (request, response, next) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(201).json({ data: "update new teacher successfully ", body: request.body })
}
