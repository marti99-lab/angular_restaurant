require('dotenv').config();  // ✅ Load environment variables

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Booking Routes
app.use('/api/bookings', require('./routes/booking.routes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
