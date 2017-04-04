angular.module('Gents')
    .service('homeService', function($http) {

        this.itemsInProducts = function(){;
            return $http({
                url:'/api/products',
                method: "GET"
            })
            .then(function(res){
                console.log(res.data)
                return res
            })
        }

















console.log('homeService')

});

