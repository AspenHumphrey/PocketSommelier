'use strict';

app.factory("HomeFact", function($q, $http){ 
  let getRandomPairData = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/pair')
      .then( ( pairData ) => {
        resolve( pairData.data );
      })
      .catch( ( err ) => {
        console.log("oops", err);
        reject( err );
      });
    });
  };
  return {
    getRandomPairData
  };

});