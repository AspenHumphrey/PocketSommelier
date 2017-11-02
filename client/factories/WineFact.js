'use strict';

app.factory("WineFact", function($q, $http){
  let getAllWines = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/wine')
      .then( ( wines ) => {
        console.log("wines", wines.data);
        resolve( wines.data );
      })
      .catch( ( err ) => {
        console.log("oops", err);
        reject( err );
      });
    });
  };
 

  let getWineDetails = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/wine/')
      .then( ( wine ) => {
        console.log("one wine", wine.data);
        resolve( wine.data );
      })
      .catch( ( err ) => {
        console.log("whoops", err);
        reject( err );
      });
    });
  };

  return {
    getAllWines, getWineDetails
  };
  
});