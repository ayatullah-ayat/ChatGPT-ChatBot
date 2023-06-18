const mongoose = require('mongoose');

const url = process.env.MOONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url);