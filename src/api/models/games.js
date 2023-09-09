export default (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "games",
    {
      game_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      game_user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      game_villain_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      game_encounter_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      game_gamemode_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      game_deck_url: {
        type: DataTypes.STRING,
      },
      game_date: {
        type: DataTypes.DATE,
      },
      game_is_win: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      game_is_campaign: {
        type: DataTypes.BOOLEAN,
      },
      game_is_multiplayer: {
        type: DataTypes.BOOLEAN,
      },
      game_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      game_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      timestamps: false,
    }
  );
  Game.associate = (models) => {
    Game.belongsTo(models.Hero, { foreignKey: "game_hero_id" });
    Game.belongsTo(models.Villain, { foreignKey: "game_villain_id" });
    Game.belongsTo(models.Encounter, { foreignKey: "game_encounter_id" });
    Game.belongsTo(models.Aspect, { foreignKey: "game_aspect_id" });
    Game.belongsTo(models.GameMode, { foreignKey: "game_gamemode_id" });
    Game.belongsTo(models.User, { foreignKey: "game_user_id" });
  };
  return Game;
};
