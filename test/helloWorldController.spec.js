/**
 * Created by james on 7/24/15.
 */
describe('Hello World Example', function(){
    var HelloWorldController, scope;

    beforeEach(module('main'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        HelloWorldController = $controller('HelloWorldController', {
            $scope: scope
        });
    }));

    it('should say "Hello World!"', function(){
        expect(scope.greeting).toEqual('Hello World!');
    });
});
