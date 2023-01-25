'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [
      {
        description: 'My first post',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg/1200px-Metro_de_Medell%C3%ADn%2C_Colombia.jpg',
        likes: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Travel #blessed',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Panor%C3%A1mica_de_San_Andres.JPG',
        likes: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
