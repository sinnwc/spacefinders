const lots = require('./lots/lots.service.js');
const buildings = require('./buildings/buildings.service.js');
const courses = require('./courses/courses.service.js');
const updates = require('./updates/updates.service.js');
const slots = require('./slots/slots.service.js');
const students = require('./students/students.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(lots);
  app.configure(buildings);
  app.configure(courses);
  app.configure(updates);
  app.configure(slots);
  app.configure(students);
};
