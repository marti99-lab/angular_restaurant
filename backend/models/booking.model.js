const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    status: { type: String, default: 'pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
