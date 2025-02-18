// Use the correct database
use('restaurantDB');

// Create a `bookings` collection (if it doesn't exist) and insert a sample booking.
db.getCollection('bookings').insertOne({
    customerName: "Test User",
    date: "2025-02-18",
    time: "19:00",
    guests: 2,
    status: "confirmed"
});

// Verify if the collection exists
db.getCollectionNames();

// Retrieve all bookings
db.getCollection('bookings').find().pretty();
