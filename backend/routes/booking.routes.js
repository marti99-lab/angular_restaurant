const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get bookings by customer name
router.get('/:customerName', async (req, res) => {
    try {
        const bookings = await Booking.find({ customerName: req.params.customerName });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a booking
router.post('/', async (req, res) => {
    const { customerName, date, time, guests } = req.body;

    // **Check if all required fields exist**
    if (!customerName || !date || !time || !guests) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const newBooking = new Booking({ customerName, date, time, guests, status: 'pending' });

    try {
        const savedBooking = await newBooking.save();
        res.json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update booking status (Approve/Reject)
router.put('/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
