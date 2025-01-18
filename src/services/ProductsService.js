import axios from 'axios';

class ProductsService {
  static getAllProductsService = () => axios.get('/products')
  static getProductByIdService = (id) => axios.get(`/products/${id}`)
}
export default ProductsService;   