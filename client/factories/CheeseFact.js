'use strict';

app.factory("CheeseFact", function($q, $http){

// gets a list of all of the cheeses
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

// gets the details of one cheese
  let getCheeseDetails = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/cheese/')
      .then( ( cheese ) => {
        // console.log("one cheese", cheese.data);
        resolve( cheese.data );
      })
      .catch( ( err ) => {
        console.log("whoops", err);
        reject( err );
      });
    });
  };

  // route is fucked up-- i already have a cheese/:id related route ... that gets all cheeses
  // the route that this calls in node is cheese/:id help
  // pass id as var to correct route. on click
  let getOneCheeseAllWines = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/cheese/')
      .then( ( cheese ) => {
        console.log("cheese and wine?", cheese);
        resolve( cheese.data );
      })
      .catch( ( err ) => {
        reject( err );
      });
    });
  };

  // needs own controller??? also needs a unique route
// gets one cheese and all associated wine(s)
  let getCheeseSearch = () => {
    return $q( ( resolve, reject ) => {
      $http.get('http://localhost:4000/cheese')
      .then( ( cheese ) => {
        console.log("cheese search", cheese.data);
        resolve( cheese.data );
      })
      .catch( ( err ) => {
        console.log("whoops", err);
        reject( err );
      });
    });
  };
// getCheeseSearch

  return {
    getAllCheeses, getCheeseDetails, getOneCheeseAllWines, getCheeseSearch 
  };


});