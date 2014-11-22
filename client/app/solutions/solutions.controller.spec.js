'use strict';

describe('Controller: SolutionsCtrl', function () {

  // load the controller's module
  beforeEach(module('crowdmathApp'));

  var SolutionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolutionsCtrl = $controller('SolutionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
