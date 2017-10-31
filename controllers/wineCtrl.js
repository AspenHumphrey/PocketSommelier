'use strict';

// get all wine: name, image
module.exports.getAllWine = (req, res, next) => {
  const { Wine } = req.app.get('models');
  Wine.findAll()
  .then( ( wines ) => {
    res.send(JSON.stringify( wines ));
    // res.render('wines', { wines });
  })
  .catch( ( err ) => {
    next( err );
  });
};

// get one wine detail
module.exports.getOneWine = (req, res, next) => {
  const { Wine } = req.app.get('models');
  Wine.findOne({ 
    raw: true, where: { id: req.params.id } 
  })
  .then( ( wine ) => {
    res.send(JSON.stringify( wine ));
    // res.render('product', { product });
  })
  .catch( ( err ) => {
    next( err );
  });
};

// get one wine with all cheeses
module.exports.getOneWineAllCheeses = (req, res, next) => {
  const { Wine, Cheese } = req.app.get('models');
    Wine.findOne({
      raw: true, where: { id: req.params.id } 
    })
      .then( ( wine ) => {
        res.send(JSON.stringify( wine ));
        // res.render('product', { product });
      })
    .catch( ( err ) => {
      next( err );
    });
  };

// gets all wine on key word search
// module.exports.getSearcWine = (req, res, next) => {
//   let search = req.body.search;
//   // jt found a nifty little widget from stack overflow
//   search = search.charAt(0).toUpperCase() + search.slice(1);
//   const { Wine } = req.app.get('models');
//   Wine.findAll( { raw: true, where: { name: search } })
//   .then( ( wines ) => {
//     res.send(JSON.stringify( wines ));
//     // res.render('product', { product });
//   })
//   .catch( ( err ) => {
//     next( err );
//   });
// };

// get random wine & cheese pair
// module.exports.getRandomPair = (req, res, next) => {
  // const { Wine, Cheese } = req.app.get('models');
  // func that chooses a random wine 1-16
  // assign num to var 
  // function getRandomWine(min, max) {
  //   min = Math.ceil(1);
  //   max = Math.floor(16);
  //   var randomWine = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  //   return randomWine;
  // }
  // getRandomWine(1, 16);
  // console.log('getRandomWine', randomWine);
  // Wine.findOne({
  //   raw: true, where: { id : var  }
  // })
// }


