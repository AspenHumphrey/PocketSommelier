'use strict';

const { Router } = require('express');
const router = Router();

const { getAllWine, getOneWineAllCheeses, getRandomPair, getAllPairs } = require('../controllers/wineCtrl');

// all wines are shown
router.get('/wine', getAllWine);
// one wine is shown with the related cheeses
router.get('/wine/:id', getOneWineAllCheeses);
// random pair is generated
router.get('/pair', getRandomPair);
// all pairs are displayed
router.get('/pair/all', getAllPairs);



module.exports = router;