require('dotenv').config(); // Load environment variables from .env file
const app = require('./app');
const connectDB = require('./db');

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB()
  .then(() => {
    // Start Server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
    process.exit(1);
  });

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  // Close server and exit
  app.close(() => process.exit(1));
});
