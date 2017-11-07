'use strict';

app.factory("FavoriteFact", function($q, $http){

  // saves the saved pair to the user with the userfavorites table
  let saveUserPair = (username, cheeseId, wineId) => {
    const token = localStorage.token;
    console.log("token", token);
    return $http({
      method: 'POST',
      url: 'http://localhost:4000/favorite',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      data: {username, cheeseId, wineId}
    });
  };

  let getUserPair = (username) => {
    console.log("getuserpair username", username);
    const token = localStorage.token;
    console.log("token", token);
    return $http({
      method: 'GET',
      url: `http://localhost:4000/favorite?username=${username}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    });
  };

  return { saveUserPair, getUserPair };
});