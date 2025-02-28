require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Allow CORS for frontend requests
app.use(cors({ 
    origin: "http://localhost:4200",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}));

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/bookings', require('./routes/booking.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
