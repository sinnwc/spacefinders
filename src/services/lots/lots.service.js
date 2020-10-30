// Initializes the `lots` service on path `/lots`
const { Lots } = require('./lots.class');
const createModel = require('../../models/lots.model');
const hooks = require('./lots.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/lots', new Lots(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('lots');

  service.hooks(hooks);
};
