'use strict';

const { Router } = require('express');
const router = Router();

const { getAllCheese, getOneCheeseAllWines } = require('../controllers/cheeseCtrl');

// all cheeses are shown
router.get('/cheese', getAllCheese);
// one cheese is shown with the related wines
router.get('/cheese/:id', getOneCheeseAllWines);


module.exports = router;