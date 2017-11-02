'use strict';

app.factory("PairFact", function($q, $http){
  let getAllPairsArr = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/pair/all')
      .then( ( pairArr ) => {
        console.log("pair Arr", pairArr);
        resolve( pairArr.data );
      })
      .catch( ( err ) => {
        console.log("oops", err);
        reject( err );
      });
    });
  };
  return {
    getAllPairsArr
  };
});