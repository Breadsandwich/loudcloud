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
      defaultValue: 'https://lh3.googleusercontent.com/8G2r77Vej8p3CglkaCFZCKIscdkLwy1l9lK1l-ThxgPEDp4dKvSfElgMxIAUNiM0-tlyxOjL4iTifX4JzbUeN2-X2zKAYWLC7i4AMw=w600',
    },
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.TEXT
    }
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Profile;
};
