import axios from 'axios';

class ProductsService {
  static getAllProductsService = () => axios.get('/products?limit=30&skip=70')
  static getProductByIdService = (id) => axios.get(`/products/${id}`)
  static getAllProductsByCategory = (category) => axios.get(`/products/category/${category}`)
}
export default ProductsService;    