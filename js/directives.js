/**
 * Created by james on 7/24/15.
 */
angular.module('directives', ['sandbox.templates'])

    .directive('simpleDirective', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/simple.html'
        }
    });