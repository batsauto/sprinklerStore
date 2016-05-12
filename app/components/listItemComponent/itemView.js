/**
 * Created by christianbarrow on 5/11/16.
 */

/********************************************************
 * template follows john papa's style guide
 * for more information, please see the following URL
 * https://github.com/johnpapa/angularjs-styleguide
 ********************************************************/
(function () {
    'use strict';

    angular
        .module('sprinklerStore')
        .directive('itemView', itemView);

    itemView.$inject = ['Product'];

    /* @ngInject */
    function itemView(Product)
    {
        var directive = {
            templateUrl: 'components/listItemComponent/listItem.tpl.html',
            restrict: 'E',
            controller: [ItemController],
            controllerAs: 'itemCtrl',
            bindToController: true
        };
        return directive;

        function ItemController(){
            var vm = this;

            vm.greeting = "Hello!";

            activate();

            function activate(){
                Product.getProducts().then(handleProducts);

                function handleProducts(response){
                    vm.products = response.data;
                }
            }
        }
    }
})();
