module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("villains", {
      villain_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      villain_pack_code: {
        type: Sequelize.STRING,
      },
      villain_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      villain_thumb: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("villains");
  },
};
