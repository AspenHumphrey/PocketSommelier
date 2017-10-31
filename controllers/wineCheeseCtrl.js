'use strict';

// get all cheese: name, image
module.exports.getAllWine = (req, res, next) => {
  const { Cheese } = req.app.get('models');
  Cheese.findAll()
  .then( ( cheeses ) => {
    res.send(JSON.stringify( cheeses ));
    // res.render('cheeses', { cheeses });
  })
  .catch( ( err ) => {
    next( err );
  });
};

// get one cheese detail
module.exports.getOneCheese = (req, res, next) => {
  const { Cheese } = req.app.get('models');
  Cheese.findOne({ 
    raw: true, where: { id: req.params.id } 
  })
  .then( ( cheeses ) => {
    res.send(JSON.stringify( cheeses ));
    // res.render('cheeses', { cheeses });
  })
  .catch( ( err ) => {
    next( err );
  });
};
