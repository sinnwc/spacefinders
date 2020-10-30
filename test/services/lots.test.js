const assert = require('assert');
const app = require('../../src/app');

describe('\'lots\' service', () => {
  it('registered the service', () => {
    const service = app.service('lots');

    assert.ok(service, 'Registered the service');
  });
});
