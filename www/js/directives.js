angular.module('directives', [])
  .directive('restaurantDetails', function() {
    return {
      restrict: 'E',
      scope: false,
      templateUrl: 'templates/restaurantDetails.html'
    };
  })
