'use strict';

app.factory("PairFact", function($q, $http){
  let getAllPairs = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/pair/all')
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
    getAllPairs
  };
});