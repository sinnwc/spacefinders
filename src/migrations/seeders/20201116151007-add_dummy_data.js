'use strict';

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('students', [
      { last_name: 'Smith', first_name: 'John', password: 'jsmith' },
      { last_name: 'Davidson', first_name: 'Mitch', password: 'mdavid'},
      { last_name: 'Hughes', first_name: 'Kelly', password: 'khughes'},
      { last_name: 'Spieth', first_name: 'Jordan', password: 'jspieth'},
    ], {});

    await queryInterface.bulkInsert('buildings', [
      { name: 'ISAT' },
      { name: 'EnGeo' },
      { name: 'SSC' },
      { name: 'Roop' },
    ], {});

    await queryInterface.bulkInsert('courses', [
      { title: 'ISAT 252' },
      { title: 'ISAT 340' },
      { title: 'HIST 101' },
      { title: 'MATH 231' },
    ], {});

    await queryInterface.bulkInsert('lots', [
      { description: 'ISAT Lot', open:'100', total:'125' },
      { description: 'East Campus Deck', open:'100', total:'125' },
      { description: 'Warsaw Deck', open:'100', total:'125' },
      { description: 'SSC Deck', open:'100', total:'125' },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('students', null, {});
  },
};
