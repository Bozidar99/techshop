import { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
//router
import { useParams } from 'react-router-dom'

//REDUX
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

//services
import ProductsService from '../services/ProductsService'

//components
import LoaderComponent from '../components/LoaderComponent'

function SingleProductPage() {

  const [singleProduct, setSingleProduct] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    ProductsService.getProductByIdService(id)
      .then(res => {
        setSingleProduct(res.data)
        setIsLoading(true)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='px-[20px] mb-5'>
      {isLoading ? <div className='container mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]'>
        {/* left side */}
        <div className='w-full lg:w-[50%]'>
          <img src={singleProduct.images[currentImage]} alt={singleProduct.title} className='w-full h-[700px] object-cover ' />

          <div className='flex items-center justify-center gap-[15px]'>
            {singleProduct.images.map((el, index) => {
              return <img key={index} src={el} alt={singleProduct.title} className='w-[220px] h-[200px] object-cover border border-textColor rounded-[20px]'
                onClick={() => setCurrentImage(index)} />
            })}
          </div>
        </div>


        {/* right sade */}
        <div className='w-full lg:w-[50%] flex flex-col gap-[15px] mt-[70px] '>
          <h1 className='text-3xl font-bold text-mainBlue'>{singleProduct.title}</h1>
          <p className='text-2xl font-bold text-mainYellow'>${singleProduct.price}</p>
          <p className='text-[15px] text-gray-500'>{singleProduct.description}</p>
          <Rating name="read-only" value={singleProduct.rating} readOnly />
          {singleProduct.stock > 0 ? <p className='text-2xl font-bold text-green-500'>In Stock</p> : <p className='text-2xl font-bold text-red-500'>Out of Stock</p>}

          <div className='flex gap-[15px]'>
            <button className='bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[20px] hover:bg-mainBlue'
            onClick={() => dispatch(addToCart(singleProduct))}
            >Add to Cart</button>
            <button className='bg-mainBlue text-whiteColor px-[40px] py-[10px] rounded-[20px] hover:bg-mainYellow'>Add to Favorite</button>
          </div>
        </div>
      </div> : <LoaderComponent size={80} />}
    </div>
  )
}

export default SingleProductPage
