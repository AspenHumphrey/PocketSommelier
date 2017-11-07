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
  const { UserFavorite, User, WineCheese } = req.app.get('models');
  const username = req.query.username;
  // let currentUser = null;
  console.log("USERNAME USERNAME USERNAME !!!!?", username);
  authHelpers.getUser(username)
  .then( (user) => {
    console.log("USER UESR", user);
    return UserFavorite.findOne({
      where: { UserId: user.id }
    })
  })
  .then( ( userFavorite ) => {
    console.log("userFavorite",userFavorite);
    WineCheese.findAll({
      where: { id: userFavorite.WineCheeseId } 
    })
  })
  .then( (favorites) => {
    res.status(200).json(favorites);
  })
  .catch( (err ) => {
    console.log("whoop", err);
  });
};

