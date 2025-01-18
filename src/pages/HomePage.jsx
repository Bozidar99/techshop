
import { useEffect } from 'react'
//services

import ProductsService from '../services/ProductsService'

//REDUX
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { saveAllProductsAction } from '../store/productSlice'

//components
import CardProductComponent from '../components/CardProductComponent'
import LoaderComponent from '../components/LoaderComponent'

function HomePage() {

  const {allProducts, loading} = useSelector(state => state.productStore)

  const dispatch = useDispatch()

  useEffect(() => {
    ProductsService.getAllProductsService()
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='container mx-auto flex flex-wrap items-center justify-center mt-[50px] gap-[10px]'>
      {loading ? allProducts.map((product) => {
        return <CardProductComponent key={product._id} product={product}/>
      }) : 
      <LoaderComponent/>}
    </div>
  )
}

export default HomePage
 