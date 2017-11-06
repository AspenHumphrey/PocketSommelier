'use strict';

const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUser, saveToFav} = require('../controllers/authCtrl');
const authHelpers = require('../auth/_helpers');

// registering user
router.post('/auth/register', registerUser);
// logging in user-- will send out a token
router.post('/auth/login', loginUser);
// gets user checks if authenticated
router.get('/auth/user', authHelpers.ensureAuthenticated, getUser);
// save to UserFavorites table
router.post('/auth/user/favorite', authHelpers.ensureAuthenticated, saveToFav);

// authHelpers.ensureAuthenticated makes sure you are logged in first-
//  will need token sent from angular

module.exports = router;