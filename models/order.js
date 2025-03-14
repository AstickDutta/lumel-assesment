module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderId: { type: DataTypes.STRING, primaryKey: true },
    productId: { type: DataTypes.STRING, allowNull: false },
    customerId: { type: DataTypes.STRING, allowNull: false },
    quantitySold: { type: DataTypes.INTEGER, allowNull: false },
    unitPrice: { type: DataTypes.FLOAT, allowNull: false },
    discount: { type: DataTypes.FLOAT, defaultValue: 0 },
    shippingCost: { type: DataTypes.FLOAT, defaultValue: 0 },
    paymentMethod: { type: DataTypes.STRING, allowNull: false },
    dateOfSale: { type: DataTypes.DATE, allowNull: false },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Product, {
      foreignKey: "productId",
      as: "Product",
    });
  };

  return Order;
};
