module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("heroes", {
      hero_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hero_pack_code: {
        type: Sequelize.STRING,
      },
      hero_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hero_thumb: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("heroes");
  },
};
