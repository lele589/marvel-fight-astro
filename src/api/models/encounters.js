export default (sequelize, DataTypes) => {
  const Encounter = sequelize.define(
    "encounters",
    {
      encounter_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      encounter_pack_code: {
        type: DataTypes.STRING,
      },
      encounter_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      encounter_difficulty: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  Encounter.associate = (models) => {
    Encounter.hasMany(models.Game);
  };
  return Encounter;
};
