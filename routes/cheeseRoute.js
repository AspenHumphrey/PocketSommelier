'use strict';

const { Router } = require('express');
const router = Router();

const { getAllCheese, getOneCheese } = require('../controllers/cheeseCtrl');

// all Categories will be shown at all times like a nav bar 
router.get('/cheese', getAllCheese);
router.get('/cheese/:id', getOneCheese);


module.exports = router;