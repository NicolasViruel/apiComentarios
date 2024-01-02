const mongoose = require('mongoose');
require('dotenv').config( { path: 'var.env' } );

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            // useFindAndModify: false
        });
        console.log('DB connected🐱‍👤');
    } catch (error) {
        console.log(error);
        process.exit(1); // Stop the app
    }
}

module.exports = connectDB;