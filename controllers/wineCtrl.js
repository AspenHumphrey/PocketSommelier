'use strict';

// get all wine: name, image
module.exports.getAllWine = (req, res, next) => {
  const { Wine } = req.app.get('models');
  Wine.findAll()
  .then( ( wines ) => {
    res.status(200).json( wines );
  })
  .catch( ( err ) => {
     next( err );
  });
};

// get one wine with all cheeses
module.exports.getOneWineAllCheeses = (req, res, next) => {
  const { Wine, Cheese } = req.app.get('models');
    Wine.findById(req.params.id, {
      include: [{ model: Cheese }]
    })
    .then( ( wine ) => {
      res.status(200).json( wine );
    })
    .catch( ( err ) => {
       next( err );
    });
  };



// the below function needs to be updated to call to all the wines 
// and count them in order to get the random number other than a 
// "magic number" get all then return count then pass to math.random.
function getRandomArbitrary() {
  return Math.floor(Math.random() * (17 - 1) + 1);
}
// get random wine & cheese pair
module.exports.getRandomPair = (req, res, next) => {
  const { Wine, Cheese } = req.app.get('models');
  let randomWine = getRandomArbitrary();
  Wine.findById(randomWine, {
    where: { id : randomWine }, include: [{ model: Cheese }]
  })
  .then( ( wine ) => {
    res.status(200).json( wine );
  })
  .catch( ( err ) => {
     next( err );
  });
};

// get all pairs of wine and cheese
module.exports.getAllPairs = (req, res, next) => {
  const { Wine, Cheese } = req.app.get('models');
  Wine.findAll({
    include: [{ model: Cheese }]
  })
  .then( ( wine ) => {
    res.status(200).json( wine );
  })
  .catch( ( err ) => {
     next( err );
  });
};

