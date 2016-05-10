/**
 * Created by ctrudo on 4/24/16.
 */
angular.module('sprinklerStore')
.service('Product', ProductService);

ProductService.$inject = ['$http'];

function ProductService($http){
    var service = this;

    service.getProducts = getProducts;

    function getProducts(){
        return $http.get('services/store-products.json');
    }
}