angular.module('arrayApp').controller('arrayCtrl', function($scope, arrayService) {



   $scope.data = arrayService.getData();




});
