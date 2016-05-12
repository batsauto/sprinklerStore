/**
 * Created by christianbarrow on
 **/

(function () {
    'use strict';

    angular
        .module('sprinklerStore')
        .directive('ssNavBar', NavBar);

    NavBar.$inject = [];

    /* @ngInject */
    function NavBar()
    {
        var directive = {
            templateUrl: 'components/navagationBar/navBar.tpl.html',
            restrict: 'E',
            controller: [NavController],
            controllerAs: 'NavCtrl',
            bindToController: true
        };
        return directive;

        function NavController(){
            var vm = this;

            

            activate();

            function activate(){
                
            }
        }
    }
})();
