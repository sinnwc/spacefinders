// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const lots = sequelizeClient.define('lots', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total: {
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
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  lots.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    lots.belongsToMany(models.buildings, {through:'buildings_lots'});
  };

  return lots;
};
