'use strict';
module.exports = (sequelize, DataTypes) => {
  const log = sequelize.define('log', {
    description: DataTypes.STRING,
    definition: DataTypes.STRING,
    result: DataTypes.STRING,
    owner: DataTypes.integer
  }, {});
  
  log.associate = function(models) {
 
  };
  return log;
};