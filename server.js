require('dotenv').config();
const express = require('express');
const app = express();
const middleware = require('./middleware/middleware');
const resources = require('./resources');

middleware(app);

app.use(resources);

app.use((err,req,res,next) => {
    const {status,message} = err;
    res.json({
        status,
        message,
    })
})

module.exports = app; 