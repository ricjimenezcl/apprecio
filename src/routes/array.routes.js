const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const {createArray} = require('../controllers/array.controller.js');

router.post("/", createArray);

module.exports = router;