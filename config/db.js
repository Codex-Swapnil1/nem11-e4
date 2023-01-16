const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.mongosh_url);
module.exports = {
    connection
}


