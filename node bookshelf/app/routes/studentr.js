const express = require("express");
//const { body, validationResult } = require("express-validator");
var {
    Validator,
    ValidationError,
} = require("express-json-validator-middleware");
var validator = new Validator({ allErrors: true });
var studentSchema = {
    type: "object",
    required: ["id", "name", "branch"],
    properties: {
        id: {
            type: "string",
            minLength: 1,
        },
        name: {
            type: "string",
            minLength: 3,
        },
        branch: {
            type: "string",
            minLength: 3,
            maxLength: 5,
        },
    },
};

var validate = validator.validate;
const s = require("../services/studentservices.js");
const router = express.Router();
router.use(
    express.urlencoded({
        extended: true,
    })
);
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.post("/addStudent", validate({ body: studentSchema }), (req, res) => {
    s.addStudent(req.body.id, req.body.name, req.body.branch);
    console.log("student details inserted sucessfully");
    res.send("Student details added succesfully.......");
    res.end();
});
router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        console.log("There was a problem in inserting the student details!!!!");
        res.status(400).send("Student details not inserted!!!!!!!!");
        next();
    } else next(err);
});

// router.post(
//     "/addStudent",
//     body("id").isNumeric().exists(),
//     body("name")
//     .isLength({
//         min: 5,
//     })
//     .isAlpha(),

//     body("branch").isLength({
//         max:5,
//         min: 3,
//     }),

//     (req, res) => {
//         const errors = validationResult(req);
//         if (errors.isEmpty()) {
//             console.log(typeof req.body.id);
//             s.addStudent(req.body.id, req.body.name, req.body.branch);
//             res.status(200).json({
//                 success: true,
//                 message: "Login successful",
//             });
//         } else {
//             return res.status(400).json({
//                 success: false,
//                 errors: errors.array(),
//             });
//         }
//     }
// );

router.get("/getAllStudents", (req, res) => {
    s.readAllStudents();

    res.send("Student details succesfully retrived");
    res.end();
});

router.delete("/deleteStudent", urlencodedParser, (req, res) => {
    tid = req.body.id;
    s.deleteStudent(tid);
    res.end();
});

module.exports = router;