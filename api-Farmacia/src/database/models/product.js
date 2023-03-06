const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    urlImage: DataTypes.STRING,
  },
  {
    createdAt: true,
    timestamps: false,
    tableName: 'Product',
  });

  return Product;
};

module.exports = Product;
