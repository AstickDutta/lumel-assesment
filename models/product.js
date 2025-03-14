module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productId: { type: DataTypes.STRING, primaryKey: true },
    productName: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    region: { type: DataTypes.STRING, allowNull: false },
  });

  Product.associate = (models) => {
    Product.hasMany(models.Order, {
      foreignKey: 'productId',
      as: 'Orders',
    });
  };

  return Product;
};