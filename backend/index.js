require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();


const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url)
        .then(() => console.log('MONGODB_connected'))
        .catch(err => console.log('Connection failed', err.message));

app.get('/', (req, res) => {
    res.end('hello from express');
})

app.get('/users', async (req, res) => {
    const users = await User.find({});

    res.json(users)
})

app.post('/users', async (req, res) => {
    const { username, name, password, phone_number } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        name,
        password: passwordHash,
        phone_number
    })

    const savedUser = await user.save();

    res.status(201).json(savedUser);
})



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
})