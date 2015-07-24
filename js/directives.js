/**
 * Created by james on 7/24/15.
 */
angular.module('directives', [])

    .directive('simpleDirective', function(){
        return {
            restrict: 'E',
            templateUrl: 'simple.html'
        }
    });