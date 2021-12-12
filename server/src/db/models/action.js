'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Task }) {
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasMany(Task, { foreignKey: 'action_id' });
    }
  };
  Action.init({
    title: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Action',
  });
  return Action;
};
