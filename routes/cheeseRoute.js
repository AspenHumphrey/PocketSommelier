'use strict';

const { Router } = require('express');
const router = Router();

const { getAllCheese, getOneCheeseAllWines, getSearchCheese } = require('../controllers/cheeseCtrl');

// all cheeses are shown
router.get('/cheese', getAllCheese);
// one cheese is shown with the related wines
router.get('/cheese/:id', getOneCheeseAllWines);
// one cheese is shown with the related wines on search
router.post('/cheese/search', getSearchCheese);


module.exports = router;