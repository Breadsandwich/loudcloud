'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    profilePicUrl: {
      type: DataTypes.STRING,
      defaultValue: 'https://www.robives.com/wp-content/uploads/2016/10/boombox-a600-600x600.jpg',
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: ' '
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: ' '
    },
    bio: {
      type: DataTypes.TEXT,
      defaultValue: ' '
    }
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Profile;
};
