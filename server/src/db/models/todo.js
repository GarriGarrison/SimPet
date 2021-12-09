'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      this.belongsTo(Task, { foreignKey: 'task_id' });
    }
  };
  Todo.init({
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    time: {
      allowNull: false,
      type: DataTypes.TIME
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    task_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
