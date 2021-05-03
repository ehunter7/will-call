const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

var connection = mongoose.createConnection("mongodb://localhost/willcallDB");

const completedSchema = new Schema({
    _id: String,
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
    updatedOn: { type: Date, default: Date.now },
    puOn: Date,
    showDetails: Boolean,
    showUpdates: Boolean,
    status: String,
    pickedupNumber: Number,
});

const complete = mongoose.model("complete", completedSchema);

module.exports = complete;