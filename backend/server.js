require('dotenv').config();  // Load environment variables first

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Allow CORS for frontend requests
app.use(cors({ 
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Booking Routes
app.use('/api/bookings', require('./routes/booking.routes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
