export default (sequelize, DataTypes) => {
  const GameMode = sequelize.define(
    "game_modes",
    {
      game_mode_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      game_mode_pack_code: {
        type: DataTypes.STRING,
      },
      game_mode_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      game_mode_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      game_mode_order: {
        allowNull: false,
        type: DataTypes.INTEGER,
        timestamps: false,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  GameMode.associate = (models) => {
    GameMode.hasMany(models.Game);
  };
  return GameMode;
};
