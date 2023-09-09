module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("encounters", {
      encounter_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      encounter_pack_code: {
        type: Sequelize.STRING,
      },
      encounter_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      encounter_difficulty: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("encounters");
  },
};
