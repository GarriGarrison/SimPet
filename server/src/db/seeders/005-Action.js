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
        title: 'жидкий корм Purina',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'вымыть лапы',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'поиграть с кошкой',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'отвезти на выставку',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'вычисать шерсть',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      /* Dog */
      {
        title: 'купить корм Roial Canina',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'выкупать',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'отвезти на осмотр зубов',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'отвезти на выставку',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'почистить уши',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  
    await queryInterface.bulkInsert('Actions', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Actions', null, {});
  }
};
