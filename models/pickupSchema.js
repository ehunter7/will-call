const mongoose = require('mongoose');

const pickupSchema = {
    pickupNumber: {type: Number, index: true},
    csr: String,
    pro: {type: Number, required: "Enter PRO number", trim: true},
    carrier: {type: String, required: "Enter Carrier name"},
    receiver: String,
    puDate: Date,
    puTime: String,
    loader: String,
    notes: String,
    comments: String,
    confirmingReceiver: String,
    confirmingCSR: String,
    createdOn: { type: Date, default: Date.now },
    puOn: Date,
};

const Pickup = mongoose.model("Pickups", pickupSchema);

module.exports = Pickup;