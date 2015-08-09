'use strict';

describe('Service: escala', function () {

  // load the service's module
  beforeEach(module('escalaOnlineApp'));

  // instantiate service
  var escala;
  beforeEach(inject(function (_escala_) {
    escala = _escala_;
  }));

  it('should do something', function () {
    expect(!!escala).toBe(true);
  });

});
