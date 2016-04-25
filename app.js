/**
 * Created by christianbarrow on 4/21/16.
 */
(function() {
    var app = angular.module('sprinklerStore', ['store-directives']);


    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now ();
            product.reviews.push(this.review);

            this.review = {};
        };
    });
})();
