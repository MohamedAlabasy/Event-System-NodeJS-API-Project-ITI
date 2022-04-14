// external 
const { validationResult } = require("express-validator");

// internal


//  to get all child
module.exports.getAllChild = (request, response) => {
    response.status(200).json({ message: "list of All Child" });
}

// to show specific child
module.exports.getChildByID = (request, response) => {
    response.status(200).json({ message: "get Specific child by id ", data: request.params });
}


// to create new child
module.exports.createChild = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(201).json({ message: "add new child successfully ", body: request.body })
}

// to update new child
module.exports.updateChild = (request, response) => {
    let result = validationResult(request);
    if (!result.isEmpty()) {
        let errorMessages = result.array().reduce((sum, error) => sum + error.msg + " ", "")
        throw new Error(errorMessages);
    }
    response.status(201).json({ message: "update child successfully ", body: request.body })
}

// to delete child
module.exports.deleteChild = (request, response) => {
    response.status(200).json({ message: "delete child successfully" })
}