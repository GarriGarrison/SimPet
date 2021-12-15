'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Todo, Animal, Action, Category, Period }) {
      this.hasMany(Todo, { foreignKey: 'task_id' });
      this.belongsTo(Animal, { foreignKey: 'animal_id' });
      this.belongsTo(Action, { foreignKey: 'action_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.belongsTo(Period, { foreignKey: 'period_id' });
    }
  };
  Task.init({
    animal_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    action_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    period_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
