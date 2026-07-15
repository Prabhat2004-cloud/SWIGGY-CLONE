import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { additems,IncrementItems,DecrementItems } from "./cartslicer";

export default function Cartcard({info}){

    const dispatch=useDispatch()
    return(

        <div className="w-full px-2 md:px-4 py-3 border-2 border-gray-300 rounded-2xl flex justify-between mb-3">
            <div className="flex">
            <img src={info.image} className="h-16 md:h-20 w-16 md:w-20 object-cover rounded-xl"></img>
            <div className="py-3 ml-3">
                <span className="text-base md:text-lg text-gray-600">{info.isVeg==true?"🟢":"🔴"}</span>
                <span className="text-base md:text-lg text-gray-600">{info.name}</span>
                <p className="mt-1 font-semibold text-lg md:text-xl ml-2">₹ {info.price}</p>
                
            </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
            <button
                className="w-8 h-8 border rounded-lg text-green-800 font-bold"
                onClick={() => dispatch(DecrementItems(info))}
            >
                -
            </button>

            <span className="text-green-800 font-bold">{info.qty}</span>

            <button
                className="w-8 h-8 border rounded-lg text-green-800 font-bold"
                onClick={() => dispatch(IncrementItems(info))}
            >
                +
            </button>
            </div>

                    

        </div>
    )
}