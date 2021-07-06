const dburi =
    "mongodb+srv://user:1234@node.xsta5.mongodb.net/db?retryWrites=true&w=majority";

const express = require("express");
const Order = require(".app/models/orderModel");
const app = express();
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
mongoose
    .connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((Result) => {
        console.log("Connected to db....");
        app.listen(100);
    })
    .catch((err) => console.log(err));
const o = require("./controller/usercontroller");
// o.activate();
console.log("In index");
app.get("/", (req, res) => {
    res.send("Server Working properly");
    res.end();
});
app.post("/addUser", (req, res) => {
    o.addUser(req, res, req.body.oid, req.body.name, req.body.num, req.body.mail);
});
app.get("/getallUsers", (req, res) => {
    o.getallUsers(req, res);
});
app.put("/getUser", (req, res) => {
    o.getUser(req, res, req.body.name);
});
app.post("/updateUserNum", (req, res) => {
    o.updateUserNum(req, res, req.body.oid, req.body.num);
});
app.put("/delUser", (req, res) => {
    o.removeUser(req, res, req.body.oid);
});
app.post("/updateUser", (req, res) => {
    o.updateUser(
        req,
        res,
        req.body.oid,
        req.body.name,
        req.body.num,
        req.body.mail
    );
});
module.exports = mongoose;