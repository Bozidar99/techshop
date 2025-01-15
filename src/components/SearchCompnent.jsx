import React from 'react'

function SearchCompnent() {
    return (
        <div className='flex items-center bg-white rounded-3xl'>
            <input type="text" placeholder='Search any things' className='p-[20px] rounded-3xl outline-none placeholder:text-textColor' />
            <button className='p-[20px] rounded-3xl bg-mainYellow text-whiteColor'>Search</button>
        </div>
    )
}

export default SearchCompnent
