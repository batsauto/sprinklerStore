/**
 * Created by ctrudo on 5/9/16.
 */
(function(){
    angular
        .module('sprinklerStore')
        .config(SprinklerConfig);

    //SprinklerConfig.$inject = [];

    function SprinklerConfig($stateProvider, $urlRouterProvider) {
 <!--todo: figure out how to shorten the display for each item in the listview so that it doenst give the complete details in this view anymore -->
         $stateProvider
             .state('listView', {
                url: "/list",
                templateUrl: "components/listViewComponent/listView.tpl.html",
                controller: 'ListCtrl'
         });
<!--todo: figure out stateparams for each item and assign them to the items so that my controller can call them up later -->
        $stateProvider
            .state('itemView', {
                url: "/item",
                templateUrl: "components/listItemComponent/listItem.tpl.html",
                controller: 'ItemCtrl'
            });
    }
})();