/**
 * Created by ctrudo on 4/24/16.
 */
angular.module('sprinklerStore')
    .directive("productDescription", function() {
    return {
        restrict: 'E',
        templateUrl: "components/description/product-description.html"
    };
});