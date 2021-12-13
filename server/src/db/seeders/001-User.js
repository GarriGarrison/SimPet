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
    
    // const arr = [{
    //   name: 'admin',
    //   email: 'admin@admin.ru',
    //   password: 'admin',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }];

    await queryInterface.bulkInsert('Users', [], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
