'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Period extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      this.hasMany(Task, { foreignKey: 'period_id' });
    }
  };
  Period.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    } 
  }, {
    sequelize,
    modelName: 'Period',
  });
  return Period;
};
