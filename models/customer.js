module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    customerId: { type: DataTypes.STRING, primaryKey: true },
    customerName: { type: DataTypes.STRING, allowNull: false },
    customerEmail: { type: DataTypes.STRING, allowNull: false },
    customerAddress: { type: DataTypes.STRING, allowNull: false },
  });
  return Customer;
};
