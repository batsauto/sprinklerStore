/**
 * Created by ctrudo on 4/24/16.
 */
angular.module("sprinklerStore")
.controller('StoreController', ['Product', function(Product) {
    var store = this;
    store.products = [];

    function activate(){
        Product.getProducts().then(productHandler);

        function productHandler(data) {
            store.products=data;
        }
    }

    activate();

}]);