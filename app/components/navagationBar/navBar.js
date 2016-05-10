/**
 * Created by christianbarrow on
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
