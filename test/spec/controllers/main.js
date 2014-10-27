'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('HybrisApp'));

    var MainCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.search = {};
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    xit('should have list of 4 languages defined', function () {
        expect(scope.languages.length).toEqual(4);
    });
});
