export default (sequelize, DataTypes) => {
  const Pack = sequelize.define(
    "packs",
    {
      pack_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      pack_code: {
        type: DataTypes.STRING,
      },
      pack_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pack_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  /* User.associate = function (models) {
   // associations can be defined here
   } */
  return Pack;
};
