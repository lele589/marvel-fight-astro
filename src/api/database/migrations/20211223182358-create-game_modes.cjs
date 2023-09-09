module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("game_modes", {
      game_mode_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      game_mode_pack_code: {
        type: Sequelize.STRING,
      },
      game_mode_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      game_mode_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      game_mode_order: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("game_modes");
  },
};
