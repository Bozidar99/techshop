
import { useEffect, useState } from 'react'
//services

import ProductsService from '../services/ProductsService'

//REDUX
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { saveAllProductsAction } from '../store/productSlice'

//components
import CardProductComponent from '../components/CardProductComponent'
import LoaderComponent from '../components/LoaderComponent'

//icons
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";

function HomePage() {

  const [isGrid, setIsGrid] = useState('gridView ')


  const { allProducts, loading, selectCategory, searchProduct } = useSelector(state => state.productStore)

  const dispatch = useDispatch()

  useEffect(() => {

    if (selectCategory) {
      ProductsService.getAllProductsByCategory(selectCategory)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    } else {
      ProductsService.getAllProductsService()
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }

  }, [selectCategory])

  useEffect(() => {
    ProductsService.getSearchProducts(searchProduct)
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err))
  }, [searchProduct])

  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-end gap-2 py-[5px]'>
        <CiGrid41 size={34} onClick={() => setIsGrid('gridView')}
          className={isGrid === 'gridView' ? 'bg-mainYellow p-[2px] rounded-lg' : ''} />
        <CiBoxList size={34} onClick={() => setIsGrid('listView')}
          className={isGrid === 'listView' ? 'bg-mainYellow p-[2px] rounded-lg' : ''} />
      </div>
      <div className={isGrid === 'gridView' ? ' flex flex-wrap items-center justify-center mt-[50px] gap-[10px]' : 'flex flex-col gap-[20px] items-center justify-center'}>
        {loading ? allProducts.map((product) => {
          return <CardProductComponent key={product._id} product={product} />
        }) :
          <LoaderComponent />}


      </div>
    </div>


  )
}

export default HomePage
