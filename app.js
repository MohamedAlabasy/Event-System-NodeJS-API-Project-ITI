// external 
const express = require("express");
const morgan = require('morgan')
const body_parser = require("body-parser");

// internal
const teachersRouter = require("./Routers/TeachersRouts");


// to create server
const PORT = 8080;
const server = express();
server.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running at: http://localhost:${process.env.PORT || PORT}`);
})
//user morgan 
server.use(morgan('dev'))
// server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// server.use(morgan('combined'))
// server.use(morgan(function (tokens, req, res) {
//     return [
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens.res(req, res, 'content-length'), '-',
//         tokens['response-time'](req, res), 'ms'
//     ].join(' ')
// }))


// middleware
// 1 -  to write request url and method using morgan package
server.use((request, response, next) => {
    // console.log(request.method, request.url);
    // console.log(morgan());
    // morgan(`:method :url :status :res[content-length] - :response-time ms`)
    next();
})

//to add header => for CORS Package to allow Users reach your site
server.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");//alow to any web side to connect to my server
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS"); //for routs
    response.header("Access-Control-Allow-Header", "Content-Type,Authorization");
    next();
});

// Router and End Points
server.use(body_parser.json()); // next in that is dependant
server.use(body_parser.urlencoded({ extended: false })); // extended => pure text and number  
server.use(teachersRouter);

// 3- not found 
server.use((request, response) => {
    response.status(404).json({ data: "Not Found" })
})


// 4 -error middleware
server.use((error, request, response, next) => {
    response.status(error.status || 500).json({ Error: error + " " })
})