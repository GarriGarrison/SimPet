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
    

    const arr = [{
      type: 'cat',
      name: 'Bib',
      breed: 'Siberia',
      sex: 'male',
      age: 4.2,
      weight: 5.7,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }];

    await queryInterface.bulkInsert('Animals', arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Animals', null, {});
  }
};
