const mongoose = require('mongoose');

const uri = process.env['uri'];
const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    if (connection) {
      console.log("Successfully Connected")
    }
  } catch (error) {
    console.log('database connection failed', error)
  }
}

module.exports = { initializeDatabase };