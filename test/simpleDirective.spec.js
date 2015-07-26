/**
 * Created by james on 7/24/15.
 */
describe('A simple directive', function() {
    var compile, scope, directiveElement;

    beforeEach(function() {
        module('directives', 'sandbox.templates');

        inject(function($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        });

        directiveElement = getCompiledElement();
    });

    function getCompiledElement() {
        var element = angular.element('<simple-directive></simple-directive>');
        var compiledElement = compile(element)(scope);
        scope.$digest();

        return compiledElement;
    }

    it('should have a span element', function() {
        var spanElement = directiveElement.find('span');

        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This will be the content of the directive');
    });
});
