var mongoose = require('mongoose');

var PassengerSchema = mongoose.Schema({
    name: String,
    seat: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Passenger', PassengerSchema);
