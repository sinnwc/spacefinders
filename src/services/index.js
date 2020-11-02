const lots = require('./lots/lots.service.js');
const buildings = require('./buildings/buildings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lots);
  app.configure(buildings);
};
