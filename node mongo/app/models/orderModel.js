const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    buyername: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;