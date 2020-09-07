const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    //MongoDB 연결(useNewUrlParser: ?, useUnifiedTopolopy: ?)
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error.massage);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
