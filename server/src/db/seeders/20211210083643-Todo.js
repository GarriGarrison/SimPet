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
        date: '19.12.2021',
        time: '08:20',
        status: false,
        task_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '19.12.2021',
        time: '08:20',
        status: false,
        task_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '19.12.2021',
        time: '16:05',
        status: false,
        task_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '28.12.2021',
        time: '11:00',
        status: false,
        task_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '20.12.2021',
        time: '20:30',
        status: false,
        task_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  
    await queryInterface.bulkInsert('Todos', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Todos', null, {});
  }
};
