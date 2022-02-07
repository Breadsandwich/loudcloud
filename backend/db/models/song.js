'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    songUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Song;
};
