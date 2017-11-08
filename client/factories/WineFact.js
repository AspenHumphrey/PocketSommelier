'use strict';

app.factory("WineFact", function($q, $http){
  let getAllWines = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/wine')
      .then( ( wines ) => {
        resolve( wines.data );
      })
      .catch( ( err ) => {
        console.log("oops", err);
        reject( err );
      });
    });
  };

  let getOneWineAllCheeses = (id) => {
    return $q( ( resolve, reject ) => {
      $http.get(`http://localhost:4000/wine/${id}`)
      .then( ( wine ) => {
        resolve( wine );
      })
      .catch( ( err ) => {
        reject( err );
      });
    });
  };
 
  return {
    getAllWines, getOneWineAllCheeses
  };
  
});