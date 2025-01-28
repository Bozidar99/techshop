
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
  const [limitProduct, setLimitProduct] = useState(10)


  const { allProducts, loading, selectCategory, searchProduct } = useSelector(state => state.productStore)

  const dispatch = useDispatch()


  useEffect(() => {
    if (searchProduct) {
      ProductsService.getSearchProducts(searchProduct)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }

  }, [searchProduct])

  useEffect(() => {

    if (selectCategory) {
      ProductsService.getAllProductsByCategory(selectCategory)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    } else {
      ProductsService.getAllProductsService(limitProduct)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }

  }, [selectCategory, limitProduct])



  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-end gap-2 py-[5px]'>
        <CiGrid41 size={34} onClick={() => setIsGrid('gridView')}
          className={isGrid === 'gridView' ? 'bg-mainYellow p-[2px] rounded-lg' : ''} />
        <CiBoxList size={34} onClick={() => setIsGrid('listView')}
          className={isGrid === 'listView' ? 'bg-mainYellow p-[2px] rounded-lg' : ''} />
      </div>
      <div className={isGrid === 'gridView' ? ' flex flex-wrap items-center justify-center mt-[50px] gap-[10px] py-[30px]' : 'flex flex-col gap-[20px] items-center justify-center py-[50px] lg-[30px]'}>
        {loading ? allProducts.map((product) => {
          return (

            <CardProductComponent key={product.id} product={product}
              isGrid={isGrid} setIsGrid={setIsGrid} />
          )
        }) :

          <LoaderComponent />}




      </div>
      {!selectCategory &&
        <div className='flex items-center justify-center py-[20px]'>
          <button className="bg-mainBlue  text-whiteColor px-[40px] py-[10px] rounded-[20px] hover:bg-mainYellow duration-500 cursor-pointer"
            onClick={() => setLimitProduct(limitProduct + 10)}
          >View More Product</button>
        </div>
      }

    </div>


  )
}

export default HomePage
