import { Rating } from "@mui/material"
//router
import { Link } from "react-router-dom"

function CardProductComponent({ product, isGrid }) {
    return (
        <div className={isGrid === 'gridView' ? "w-[300px] border border-textColor rounded-[20px] flex flex-col items-center gap-[10px] justify-center p-[20px] bg-lightGray px-[10px]" :
            'w-full flex items-center justify-between border border-textColor px-[20px] rounded-lg '
        }>
            <div>
                <img src={product.thumbnail} alt={product.title} className={isGrid === 'gridView' ? "w-full h-[200px] object-cover" :
                    'h-[100px] object-cover lg:h-[200px]'
                }/>
            </div>
            {isGrid === 'listView' ? (
                <>
                    <h3 className=" hidden lg:flex">{product.title}</h3>
                    <h4 className=" hidden lg:flex">${product.price}</h4>
                </>
            ) : (
                <>
                     <h3>{product.title}</h3>
                     <h4>${product.price}</h4>
                </>
            )}
           
            <Rating name="read-only" value={product.rating} readOnly />
            <Link to={`/singleProduct/${product.id}`} className={isGrid === 'gridView' ? "bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[20px] hover:bg-mainBlue duration-500 cursor-pointer" : 
                "bg-mainYellow text-whiteColor px-[8px] py-[4px] rounded-lg hover:bg-mainBlue duration-500 cursor-pointer lg:px-[40px] lg:py-[10px] lg:rounded-[20px]"
            }>View More</Link>
        </div>
    )
}

export default CardProductComponent
