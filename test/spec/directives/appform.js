'use strict';

describe('Directive: appform', function () {

  // load the directive's module
  beforeEach(module('sampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<appform></appform>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appform directive');
  }));
});
