import React, { useEffect, useState } from 'react'
//Services
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import CategoryService from "../services/CategoryService"
import { saveAllCategoryAction } from '../store/categorySlice'
import LoaderComponent from './LoaderComponent'
import { saveSelectCategoryAction } from '../store/productSlice'

function CategoryComponent() {
  const [toggleCategory, setToggleCategory] = useState(false)

  const { allCategory, categoryLoader } = useSelector(state => state.categoryStore)

  const dispatch = useDispatch()

  useEffect(() => {
    CategoryService.getAllCategoryService()
      .then((res) => dispatch(saveAllCategoryAction(res.data)))
      .catch((err) => console.log(err))

  }, [])

  function handleToggleCategory() {
    setToggleCategory(!toggleCategory)
  }
  return (
    <div className='bg-lightGray p-[10px]'>
      <div className='container mx-auto flex items-center flex-col gap-[20px] lg:flex-row'>
        <button className='bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[20px] hover:bg-mainBlue'
          onClick={handleToggleCategory}
        >
          {toggleCategory ? 'Close Category' : 'Show Category'}
        </button>
        {toggleCategory && <ul className='flex flex-wrap items-center justify-center gap-[10px] p-[10px]'>

          {categoryLoader ? <>
            <li className='w-[250px] bg-mainBlue text-whiteColor text-center rounded-[10px] p-[5px] hover:bg-mainYellow cursor-pointer duration-300'
              onClick={() => dispatch(saveSelectCategoryAction(''))}>All Category</li>
            {allCategory.map((cat, index) => {
              return <li key={index}
                className='w-[250px] bg-mainBlue text-whiteColor text-center rounded-[10px] p-[5px] hover:bg-mainYellow cursor-pointer duration-300'
                onClick={() => dispatch(saveSelectCategoryAction(cat))}
              >{cat}</li>
            })}</>
            : <LoaderComponent />}
        </ul>}
      </div>
    </div>
  )
}

export default CategoryComponent
