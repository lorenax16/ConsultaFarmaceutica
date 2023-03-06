const productService = require('../../services/products/ProductService');

// const create = async (req, res) => {
//   const { name, description, price, urlImage } = req.body;
//   const product = await productService.create({name, description, price, urlImage});
//   return res.status(201).json(product);
// };

const getAll = async (req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById =  async (req, res) => {
  try {
    const product = await productService.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await productService.deleteById(id);
    return res.status(200).json({ message: 'Deletado com Sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  // create,
  getAll,
  getById,
  deleteById
};
