const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');

// Get All Bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a New Booking
router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a Booking
router.delete('/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get bookings for a specific user
router.get("/:customerName", async (req, res) => {
    try {
        const customerName = req.params.customerName;
        const bookings = await Booking.find({ customerName });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: "Error fetching bookings" });
    }
});

module.exports = router;
