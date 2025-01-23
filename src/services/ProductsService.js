import axios from 'axios';

class ProductsService {
  static getAllProductsService = (limit) => axios.get(`/products?limit=${limit}&skip=70`)
  static getProductByIdService = (id) => axios.get(`/products/${id}`)
  static getAllProductsByCategory = (category) => axios.get(`/products/category/${category}`)
  static getSearchProducts = (search) => axios.get(`/products/search?q=${search}`)
}
export default ProductsService;    