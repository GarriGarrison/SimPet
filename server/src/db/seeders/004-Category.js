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
        title: 'Feed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hygiene',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Medical',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Contact',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Care',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Party',
        createdAt: new Date(),
        updatedAt: new Date()
      }
     ];
  
    await queryInterface.bulkInsert('Categories', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
