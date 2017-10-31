'use strict';

const { Router } = require('express');
const router = Router();

const { getAllWine, getOneWineAllCheeses, getRandomPair, getAllPairs } = require('../controllers/wineCtrl');

// all Categories will be shown at all times like a nav bar 
router.get('/wine', getAllWine);
router.get('/wine/:id', getOneWineAllCheeses);
router.get('/pair', getRandomPair);
router.get('/pair/all', getAllPairs)


module.exports = router;