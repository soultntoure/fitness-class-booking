const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Routes (to be defined)
// const authRoutes = require('./routes/auth');
// const studioRoutes = require('./routes/studios');
// const bookingRoutes = require('./routes/bookings');

// app.use('/api/auth', authRoutes);
// app.use('/api/studios', studioRoutes);
// app.use('/api/bookings', bookingRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Fitness Booking API is running!' });
});

// Error handling middleware (to be defined)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

module.exports = app;
