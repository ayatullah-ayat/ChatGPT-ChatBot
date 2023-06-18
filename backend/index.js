require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('hello from express');
})



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
})