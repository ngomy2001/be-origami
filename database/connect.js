require('dotenv').config();
const mongoose = require('mongoose');

const connect = () => {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(' Mongoose is connected')
    );
  } catch (error) {
    console.log('🚀 ~ file: connect.js ~ line 13 ~ connect ~ error', error);
  }
};

const disconnect = async () => {
  await mongoose.disconnect();
  console.log('Mongoose is disconnected');
  // mongoose.connection.close();
};
module.exports = {
  connect,
  disconnect,
};
