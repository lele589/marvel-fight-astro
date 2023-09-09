export default (sequelize, DataTypes) => {
  const Aspect = sequelize.define(
    "aspects",
    {
      aspect_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      aspect_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      aspect_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      aspect_color: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  Aspect.associate = (models) => {
    Aspect.hasMany(models.Game);
  };
  return Aspect;
};
