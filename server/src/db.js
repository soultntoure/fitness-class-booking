const { Pool } = require('pg'); // Using 'pg' for PostgreSQL

// Environment variables should be used for connection details
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'fitness_booking',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

// Optional: Add error handling for the pool itself
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

const connectDB = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL database:', res.rows[0].now);
    return pool;
  } catch (err) {
    console.error('Database connection failed:', err.message);
    throw err; // Re-throw to be caught by server.js
  }
};

module.exports = connectDB;
