const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/willcallDB");

autoIncrement.initialize(connection);

const pickupSchema = new Schema({
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
    status: String
});

pickupSchema.plugin(autoIncrement.plugin, {model: 'pickup',field: 'pickupNumber'});

const Pickup = mongoose.model("Pickups", pickupSchema);

module.exports = Pickup;