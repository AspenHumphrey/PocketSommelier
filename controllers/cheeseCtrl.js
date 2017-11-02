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



  // gets cheese on key word search
// module.exports.getSearchCheese = (req, res, next) => {
//   let search = req.body.search;
//   // found a nifty little widget from stack overflow
//   search = search.charAt(0).toUpperCase() + search.slice(1);
//   const { Cheese, Wine } = req.app.get('models');
//   Cheese.findOne( { raw: true, where: { name: search }, include: [{ model: Wine }] })
//   .then( ( cheese ) => {
//     res.status(200).json( cheese );
//   })
//   .catch( ( err ) => {
//     next( err );
//   });
// };

