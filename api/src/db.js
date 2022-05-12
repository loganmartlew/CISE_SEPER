const { connect } = require('mongoose');

module.exports = async function connectDB() {
  try {
    connect(process.env.MONGO_URI);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to database');
  }
};
