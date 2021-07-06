class userController {
    userController() {
        const Order = require("../models/orderModel");
    }
    addUser(req, res, oid, name, num, mail) {
        this.Order = require("../models/orderModel");
        const order = new this.Order({
            _id: oid,
            buyername: name,
            mobile: num,
            email: mail,
        });
        order
            .save()
            .catch((err) => console.log(err))
            .then((result) => {
                res.send(result);
                console.log("User details Succesfully Inserted .......");
                res.end();
            });
    }
    getallUsers(req, res) {
        this.Order = require("../models/orderModel");
        this.Order.find()
            .then((result) => {
                res.send(result);

                res.end();
            })
            .catch((err) => console.log(err));
    }
    getUser(req, res, name) {
        this.Order = require("../models/orderModel");
        this.Order.find({ buyername: name })
            .then((result) => {
                res.send(result);

                res.end();
            })
            .catch((err) => console.log(err));
    }
    removeUser(req, res, id) {
        this.Order = require("../models/orderModel");
        this.Order.remove({ _id: id })
            .then((result) => {
                res.send(result);
                console.log("User details Succesfully deleted...");

                res.end();
            })
            .catch((err) => console.log(err));
    }
    updateUser(req, res, id, name, num, mail) {
        this.Order = require("../models/orderModel");
        //  this.Order.remove({ _id: id });
        this.Order.findOne({ _id: id })
            .remove()
            .then(() => {
                console.log("user details deleted");
            });

        this.addUser(req, res, id, name, num, mail);
    }
    updateUserNum(req, res, id, num) {
        this.Order = require("../models/orderModel");
        const filter = { _id: id };
        const update = { mobile: num };
        this.Order.findByIdAndUpdate(filter, update)
            .then((result) => {
                res.send(result);
                console.log("User details Succesfully Updated .......");
                res.end();
            })
            .catch((err) => console.log(err));
    }
}
module.exports = new userController();