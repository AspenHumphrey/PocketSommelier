'use strict';

// get all cheeses and info.
module.exports.getAllCheese = (req, res, next) => {
  const { Cheese } = req.app.get('models');
  Cheese.findAll()
  .then( ( cheeses ) => {
    res.status(200).json( cheeses );
  })
  .catch( ( err ) => {
     next( err );
  });
};


// get one cheese with all wine
module.exports.getOneCheeseAllWines = (req, res, next) => {
  const { Cheese, Wine } = req.app.get('models');
    Cheese.findById(req.params.id, {
      include: [{ model: Wine }]
    })
    .then( ( cheese ) => {
      res.status(200).json( cheese );
    })
    .catch( ( err ) => {
       next( err );
    });
  };


