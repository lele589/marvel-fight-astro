module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("aspects", {
      aspect_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      aspect_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      aspect_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      aspect_color: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("aspects");
  },
};
