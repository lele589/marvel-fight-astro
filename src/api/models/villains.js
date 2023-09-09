export default (sequelize, DataTypes) => {
  const Villain = sequelize.define(
    "villains",
    {
      villain_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      villain_pack_code: {
        type: DataTypes.STRING,
      },
      villain_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      villain_thumb: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  Villain.associate = (models) => {
    Villain.hasMany(models.Game);
  };
  return Villain;
};
