// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const students = sequelizeClient.define('students', {
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    remember_me: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  students.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return students;
};
