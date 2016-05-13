/**
 * Created by ctrudo on 5/9/16.
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
        .directive('itemCard', ItemCard);

    ItemCard.$inject = [];

    /* @ngInject */
    function ItemCard()
    {
        var directive = {
            templateUrl: 'components/itemCardComponent/itemCard.tpl.html',
            restrict: 'E',
            controller: [ItemCardController],
            controllerAs: 'ItemCardCtrl',
            bindToController: {
                product: "="
            }
        };
        return directive;

        function ItemCardController(){
            var vm = this;

            activate();

            function activate(){

            }
        }
    }
})();
