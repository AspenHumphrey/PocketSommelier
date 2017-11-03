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

// gets the details of one cheese
  // let getCheeseDetails = () => {
  //   return $q( ( resolve, reject ) => {
  //     $http.get(`http://localhost:4000/cheese/${id}`)
  //     .then( ( cheese ) => {
  //       resolve( cheese.data );
  //     })
  //     .catch( ( err ) => {
  //       console.log("whoops", err);
  //       reject( err );
  //     });
  //   });
  // };

  // route is fucked up-- i already have a cheese/:id related route ... that gets all cheeses
  // the route that this calls in node is cheese/:id help
  // pass id as var to correct route. on click
  let getOneCheeseAllWines = (id) => {
    return $q( ( resolve, reject ) => {
      $http.get(`http://localhost:4000/cheese/${id}`)
      .then( ( cheese ) => {
        console.log("cheese and wine?", cheese );
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