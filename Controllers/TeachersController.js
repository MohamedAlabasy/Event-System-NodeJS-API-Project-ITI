// external 
const { validationResult } = require("express-validator");

// internal


//  to get all teachers
module.exports.getAllTeacher = (request, response, next) => {
    // console.log(request.query);
    // console.log(request.params);
    response.status(200).json({ message: "list of All Teacher" });
}

// to show specific  Teacher
module.exports.getTeacherByID = (request, response,) => {
    response.status(200).json({ message: "get Specific Teacher by ", data: request.params });
}


// to create new Teacher
module.exports.createTeacher = (request, response, next) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(201).json({ message: "add new teacher successfully ", body: request.body })
}

// to update new Teacher
module.exports.updateTeacher = (request, response, next) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(201).json({ message: "update new teacher successfully ", body: request.body })
}

// to delete teacher
module.exports.deleteTeacher = (request, response, next) => {
    response.status(200).json({ message: "delete teacher successfully" })
}