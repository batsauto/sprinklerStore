/********************************************************
 * template follows john papa's style guide
 * for more information, please see the following URL
 * https://github.com/johnpapa/angularjs-styleguide
 ********************************************************/
(function () {
    'use strict';

    angular
        .module('sprinklerStore')
        .controller('sprinklerStoreController', sprinklerStore);

    sprinklerStore.$inject = ['Product'];

    /* @ngInject */
    function sprinklerStore(Product) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'sprinklerStore';

        activate();

        function activate(){
            Product.getProducts().then(handleProducts);

            function handleProducts(response){
                vm.products = response.data;
            }
        }
    }
})();