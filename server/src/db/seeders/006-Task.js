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
      /* Cat */
      {
        animal_id: 1,
        action_id: 1,
        category_id: 1,
        period_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 2,
        category_id: 2,
        period_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 3,
        category_id: 4,
        period_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 4,
        category_id: 6,
        period_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 1,
        action_id: 5,
        category_id: 5,
        period_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      /* Dog */
      {
        animal_id: 2,
        action_id: 6,
        category_id: 1,
        period_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 2,
        action_id: 7,
        category_id: 2,
        period_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 2,
        action_id: 8,
        category_id: 3,
        period_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 2,
        action_id: 9,
        category_id: 6,
        period_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        animal_id: 2,
        action_id: 10,
        category_id: 5,
        period_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
