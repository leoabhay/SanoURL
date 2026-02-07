const mongoose = require("mongoose");

async function dbConnection() {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/short_url";
    return mongoose.connect(uri);
}

module.exports = {
    dbConnection,
};