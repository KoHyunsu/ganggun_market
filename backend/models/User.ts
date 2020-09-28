module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      UserId: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      nth_member: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: "0: 미인증, 1: 신입, 2: 회원, 3: 관리자"
      }
    },
    {
      tableName: "User",
      comment: "회원"
    }
  );

  User.associate = models => {
    User.hasMany(models.Lecture);
    User.hasMany(models.Assignment);
    User.hasOne(models.Application);
  };

  return User;
};
