/**
 * Created by ctrudo on 4/24/16.
 */
angular.module('sprinklerStore')
    .directive("productReviews", function() {
    return {
        restrict: 'E',
        templateUrl: "components/reviews/product-reviews.html"
    };
});