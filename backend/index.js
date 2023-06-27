require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();


const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url)
        .then(() => console.log('MONGODB_connected'))
        .catch(err => console.log('Connection failed', err.message));

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.end('hello from express');
})

app.get('/users', async (req, res) => {
    const users = await User.find({});

    res.json(users)
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const passwordCheck = user === null ?
                        false 
                        : await bcrypt.compare(password, user.password)

    if(!(user && passwordCheck)){
        return res.status(401).json({
            error: 'invalid email or password'
        })
    }

    const userToken = {
        email: email,
        id: user._id
    }

    const token = jwt.sign(userToken, 'SECRET_KEY', { expiresIn: 60 * 60 });

    res.status(201)
        .send({
            token,
            email: user.email,
            name: user.name
        })
})

app.post('/users', async (req, res) => {
    console.log('users_post_request_body', req.body);
    const { email, name, password, phone_number } = req.body;


    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        email,
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