ngApi.controller('apiCtrl', function($scope, apiService) {

   var promise = apiService.getStarShips();

   promise.then(function(starships) {
      $scope.starships = starships;
   });

});
