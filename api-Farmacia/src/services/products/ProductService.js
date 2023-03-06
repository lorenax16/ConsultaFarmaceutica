const models = require('../../database/models')

const { Product } = models;

// const create = async ({name, description, price, urlImage}) => {
//   const productExist = await Product.findOne({ where: { name }});
//   if(productExist) return null;
//   const newProduct = await Product.create({ name, description, price, urlImage });
//   return newProduct;
// };


const getAll = async () => {
  return Product.findAll();
};

const getById =  async (id) => {
  return Product.findOne(id);
};

const deleteById = async (id) => {
  return Product.destroy({
    where: { id },
  });
};

module.exports = {
  // create,
  getAll,
  getById,
  deleteById
};
