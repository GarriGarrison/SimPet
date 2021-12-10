'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    const arr = [
      {
        animal_id: 1,
        action_id: 1,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 3,
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 4,
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 5,
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  
    await queryInterface.bulkInsert('Tasks', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
