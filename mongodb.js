const mongoose = require("mongoose");
// MongoDB URI from environment variables
try {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
} catch (err) {
  console.error("Error connecting to MongoDB:", err);
}
