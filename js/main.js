/**
 * Created by james on 7/24/15.
 */
angular.module('main', [])

.controller('HelloWorldController', function($scope) {
        $scope.greeting = 'Hello World!'
    })

.directive('simpleDirective', function(){
        return {
            restrict: 'E',
            template: '<span>This will be the content of the directive</span>',
            link: function(scope, elem) {

            }
        }
    });
