export default (sequelize, DataTypes) => {
  const Hero = sequelize.define(
    "heroes",
    {
      hero_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      hero_pack_code: {
        type: DataTypes.STRING,
      },
      hero_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      hero_thumb: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  Hero.associate = (models) => {
    Hero.hasMany(models.Game);
  };
  return Hero;
};
