// Import MongoDB client
const { MongoClient } = require("mongodb");

// Define the MongoDB connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoDB client
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("✅ Connected to MongoDB");

        // Select the database
        const database = client.db("restaurantDB");

        // Select the collection
        const bookings = database.collection("bookings");

        // Fetch all bookings (Test Query)
        const result = await bookings.find().toArray();
        console.log("📌 Bookings Data:", result);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the function
run();
