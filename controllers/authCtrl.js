'use strict';
const localAuth = require('../auth/local');
const authHelpers = require('../auth/_helpers');


module.exports.registerUser = (req, res, next) => {
  console.log("registered?");
  return authHelpers.createUser(req)
    .then((user) => { return localAuth.encodeToken(user); })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error'
      });
    });
};

module.exports.loginUser = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  return authHelpers.getUser(username)
    .then((response) => {
      authHelpers.comparePass(password, response.password);
      return response;
    })
    .then((response) => { return localAuth.encodeToken(response); })
    .then((token) => {
      res.status(200).json({
        status: 'success',
        token: token
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error'
      });
    });
};

module.exports.getUser = (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
};

module.exports.saveToFav = (req, res, next) => {
  const { WineCheese, User, UserFavorite } = req.app.get('models');
  const username = req.body.username;
  let currentUser = null;
  User.findOne({
    where: {username: username}
  })
  .then(( user ) => {
    currentUser = user;
    return WineCheese.findOne({
      where: { CheeseId: req.body.cheeseId, WineId: req.body.wineId } 
    })
  })
  .then( ( winecheese ) => {
    return UserFavorite.create({ UserId: currentUser.id, WineCheeseId: winecheese.id } );
  })
  .then( ( userFav ) => {
    res.status(200).json({
      status: 'success'
    });
  })
  .catch((err) => {
    console.log("err errr err ", err);
    res.status(500).json({
      status: 'error'
    });
  });
};

module.exports.getUserFav = (req, res, next) => {
  const { sequelize, UserFavorite, User, WineCheese, Wine, Cheese } = req.app.get('models');
  // const { sequelize } = req.app.get('models');
  const username = req.query.username;
  authHelpers.getUser(username)
  .then( (user) => {
    return sequelize.query( `select w."name" as "wineName", w."image" as "wineImage", c."image", c."name" 
    from "UserFavorites" f 
    left join "Users" u on u.id = f."UserId" 
    left join "WineCheeses" wc on wc.id = f."WineCheeseId" 
    left join "Wines" w on w.id = wc."WineId" 
    left join "Cheeses" c on c.id = wc."CheeseId" 
    where u.id = 1;`)
  })
  .then( ( data ) => {
    console.log("data", data);
    res.status(200).json( data );
  })
  .catch( (err ) => {
    console.log("whoop", err);
  });
};

