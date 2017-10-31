'use strict';

const { Router } = require('express');
const router = Router();

const { getAllWine, getOneWine, getOneWineAllCheeses } = require('../controllers/wineCtrl');

// all Categories will be shown at all times like a nav bar 
router.get('/wine', getAllWine);
router.get('/wine/:id', getOneWine);
router.get('/onewine/:id', getOneWineAllCheeses);
// router.get('/wine_pair', getRandomPair);


module.exports = router;