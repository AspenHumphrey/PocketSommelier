'use strict';

app.factory("HomeFact", function($q, $http){ 
  console.log("anything");
  let getRandomPairData = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/pair')
      .then( ( pairData ) => {
        console.log("parData", pairData);
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