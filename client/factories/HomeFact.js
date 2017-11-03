'use strict';

app.factory("HomeFact", function($q, $http){ 
  let getRandomPairData = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/pair')
      .then( ( pairData ) => {
        console.log("parData", pairData.data.id);
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