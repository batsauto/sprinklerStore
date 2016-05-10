/**
 * Created by ctrudo on 5/9/16.
 */
(function(){
    angular
        .module('sprinklerStore')
        .config(SprinklerConfig);

    SprinklerConfig.$inject = [];

    function SprinklerConfig() {
        // $stateProvider.state('listView', {
        //     url: "/list",
        //     templateUrl: "",
        //     controller: function($scope) {
        //         $scope.items = ["A", "List", "Of", "Items"];
        //     }
        // });
    }
})();