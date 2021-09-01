module.exports = (sequelize, DataTypes) => {
  const Master = sequelize.define(
    'master',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
      },
      statusId: {
        field: 'status_id',
        type: DataTypes.INTEGER,
      },
      product: {
        field: 'product',
        type: DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Master;
};
