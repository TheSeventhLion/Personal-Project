angular.module('Gents')
    .controller('homeCtrl', function($http, $scope, homeService){


// console.log('garbage')
// $scope.data="datastuff"



homeService.itemsInProducts()
    .then(function(res){
        console.log("from the ctrl", res.data)
        $scope.data = res.data
    })











})


