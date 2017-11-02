'use strict';

app.factory("CheeseFact", function($q, $http){

  let getAllCheeses = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/cheese')
      .then( ( cheeses ) => {
        console.log("cheeses", cheeses.data);
        resolve( cheeses.data );
      })
      .catch( ( err ) => {
        console.log("oops", err);
        reject( err );
      });
    });
  };

  // pass id from scope into func on click
  let getCheeseDetails = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/cheese/')
      .then( ( cheese ) => {
        console.log("one cheese", cheese.data);
        resolve( cheese.data );
      })
      .catch( ( err ) => {
        console.log("whoops", err);
        reject( err );
      });
    });
  };

  return {
    getAllCheeses, getCheeseDetails
  };


});