'use strict';

describe('Service: escalaApi', function () {

  // load the service's module
  beforeEach(module('escalaOnlineApp'));

  // instantiate service
  var escalaApi;
  beforeEach(inject(function (_escalaApi_) {
    escalaApi = _escalaApi_;
  }));

  it('should do something', function () {
    expect(!!escalaApi).toBe(true);
  });

});
