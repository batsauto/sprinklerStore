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
        .directive('listView', ListView);

    ListView.$inject = [];

    /* @ngInject */
    function ListView()
    {
        var directive = {
            templateUrl: 'components/listViewComponent/listView.tpl.html',
            restrict: 'E',
            controller: [ListController],
            controllerAs: 'ListCtrl',
            bindToController: true
        };
        return directive;

        function ListController(){
            var vm = this;

            vm.greeting = "Hello!";

        }
    }
})();
