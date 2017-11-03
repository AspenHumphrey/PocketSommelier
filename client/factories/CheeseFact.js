'use strict';

app.factory("CheeseFact", function($q, $http){

// gets a list of all of the cheeses
  let getAllCheeses = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/cheese')
      .then( ( cheeses ) => {
        resolve( cheeses.data );
      })
      .catch( ( err ) => {
        console.log("oops", err);
        reject( err );
      });
    });
  };

  let getOneCheeseAllWines = (id) => {
    return $q( ( resolve, reject ) => {
      $http.get(`http://localhost:4000/cheese/${id}`)
      .then( ( cheese ) => {
        resolve( cheese );
      })
      .catch( ( err ) => {
        reject( err );
      });
    });
  };

  return {
    getAllCheeses, getOneCheeseAllWines 
  };


});