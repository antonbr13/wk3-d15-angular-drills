angular.module('arrayApp')

.controller('arrayController', function($scope, arrayService) {

   $scope.pics = arrayService.serveImg();

   $scope.arrData = arrayService.getData();


});
