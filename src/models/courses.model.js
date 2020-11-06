// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const courses = sequelizeClient.define('courses', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    building: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    slot: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  courses.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return courses;
};
