'use strict';

app.factory("FavoriteFact", function($q, $http){

  // saves the saved pair to the user with the userfavorites table
  let saveUserPair = (username, cheeseId, wineId) => {
    const token = localStorage.token;
    console.log("token", token);
    return $http({
      method: 'POST',
      url: 'http://localhost:4000/auth/user/favorite',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      data: {username, cheeseId, wineId}
    })
    .then( ( userFav ) => {
      resolve( userFave.data );
    })
    .catch( ( err ) => {
      console.log("oops", err);
    });
  };

  return { saveUserPair };
});