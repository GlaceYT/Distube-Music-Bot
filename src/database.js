const mongoose = require('mongoose');
const { mongoUri } = require('./config/config');
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('\x1b[36m[ DATABASE ]\x1b[0m', '\x1b[32mConnected to MongoDB ✅\x1b[0m');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
