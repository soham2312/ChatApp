const express = require('express');
const dotenv = require('dotenv');
const {registerUser} = require('../controllers/UserController');

const router= express.Router();

router.post('/',registerUser);