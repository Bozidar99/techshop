import React, { useEffect, useState } from 'react'
//Services
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import CategoryService from "../services/CategoryService"
import { saveAllCategoryAction } from '../store/categorySlice'

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
      <div className='container mx-auto flex items-center'>
        <button className='bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[20px]'
        onClick={handleToggleCategory}
        >
          {toggleCategory ? 'Close Category' : 'Show Category'}
        </button>
        {toggleCategory && <ul className='flex flex-wrap items-center justify-center gap-[10px] p-[10px]'>
          {categoryLoader ? allCategory.map((cat, index) => {
            return <li key={index} className='w-[250px] bg-mainBlue text-whiteColor text-center rounded-[10px]'>{cat}</li>
          }) : <h2>Loading...</h2>}
        </ul>}
      </div>
    </div>
  )
}

export default CategoryComponent
