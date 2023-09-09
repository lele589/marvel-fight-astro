module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("packs", {
      pack_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pack_code: {
        type: Sequelize.STRING,
      },
      pack_name: {
        type: Sequelize.STRING,
      },
      pack_type: {
        type: Sequelize.ENUM("campaign", "hero", "scenario"),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("packs");
  },
};
