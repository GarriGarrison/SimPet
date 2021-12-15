'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Task, { foreignKey: 'animal_id' });
    }
  };
  Animal.init({
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    avatar: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    breed: {
      allowNull: false,
      type: DataTypes.STRING
    },
    sex: {
      allowNull: false,
      type: DataTypes.STRING
    },
    age: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    weight: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
