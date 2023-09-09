export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_name: {
        type: DataTypes.STRING,
      },
      user_email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_password: {
        allowNull: false,
        type: DataTypes.STRING(150),
      },
      user_role: {
        allowNull: false,
        type: DataTypes.ENUM("admin", "user"),
      },
      user_created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      user_updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      freezeTableName: true,
      classMethods: {},
      timestamps: false,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Game); /* , { onDelete: 'cascade' } ) */
  };
  return User;
};
