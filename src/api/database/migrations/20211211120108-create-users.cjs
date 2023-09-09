module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_role: {
        allowNull: false,
        type: Sequelize.ENUM("admin", "user"),
      },
      user_created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
