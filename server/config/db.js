const mongoose = require('mongoose');
// const config = require('./config');

const  connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn =await mongoose.connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(`Error:${err.message}`.red.bold);
        process.exit();
    }
    }

module.exports = connectDB;