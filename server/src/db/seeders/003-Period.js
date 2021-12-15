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
        title: 'None',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Day',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Week',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Month',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Year',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     ];
  
    await queryInterface.bulkInsert('Periods', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Periods', null, {});
  }
};
