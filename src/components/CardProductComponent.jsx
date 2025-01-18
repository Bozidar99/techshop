import { Rating } from "@mui/material"
//router
import { Link } from "react-router-dom"

function CardProductComponent({product}) {
    return (
        <div className="w-[300px] border border-textColor rounded-[20px] flex flex-col items-center gap-[10px] justify-center p-[20px] bg-lightGray">
            <div>
                <img src={product.thumbnail} alt={product.title} className="w-full h-[200px] object-cover"/>
            </div>
            <h3>{product.title}</h3>
            <h4>${product.price}</h4> 
            <Rating name="read-only" value={product.rating} readOnly />
            <Link  to={`/singleProduct/${product.id}`} className="bg-mainYellow text-whiteColor px-[40px] py-[10px] rounded-[20px] hover:bg-mainBlue duration-500 cursor-pointer">View More</Link>
        </div>
    )
}

export default CardProductComponent
