module.exports = (sequelize, DataTypes) =>{
    const Groups = sequelize.define('Groups', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          postText: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          username: {
              type: DataTypes.STRING,
              allowNull: false,
          },
      });
      return Groups;
    
}
