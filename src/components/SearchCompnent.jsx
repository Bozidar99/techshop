import { useState } from 'react'
//redux
import { useDispatch } from 'react-redux'
import { saveSearchProductAction } from '../store/productSlice'

function SearchCompnent() {

    const [searchProducts, setSearchProducts] = useState('')

    const dispatch = useDispatch()

    function handleSearchProducts() {
        dispatch(saveSearchProductAction(searchProducts))
        setSearchProducts('')
    }

    return (
        <div className='flex items-center bg-white rounded-3xl'>
            <input type="text" placeholder='Search any things' 
            className='p-[20px] rounded-3xl outline-none placeholder:text-textColor' 
            value={searchProducts}
            onChange = {(e) => setSearchProducts(e.target.value)}
            />
            <button className='p-[20px] rounded-3xl bg-mainYellow text-whiteColor'
            onClick={handleSearchProducts}
            >Search</button>
        </div>
    )
}


export default SearchCompnent
