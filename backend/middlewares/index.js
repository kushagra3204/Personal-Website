const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');

module.exports = [
    express.json(),
    express.urlencoded({extended: true}),
    cookieParser(),
    cors({ origin: 'http://localhost:5173', credentials: true }),
]