module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("games", {
      game_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      game_user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      game_hero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "heroes",
          key: "hero_id",
        },
      },
      game_aspect_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "aspects",
          key: "aspect_id",
        },
      },
      game_villain_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "villains",
          key: "villain_id",
        },
      },
      game_encounter_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "encounters",
          key: "encounter_id",
        },
      },
      game_gamemode_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "game_modes",
          key: "game_mode_id",
        },
      },
      game_deck_url: {
        type: Sequelize.STRING,
      },
      game_date: {
        type: Sequelize.DATE,
      },
      game_is_win: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      game_is_campaign: {
        type: Sequelize.BOOLEAN,
      },
      game_is_multiplayer: {
        type: Sequelize.BOOLEAN,
      },
      game_created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      game_updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("games");
  },
};
