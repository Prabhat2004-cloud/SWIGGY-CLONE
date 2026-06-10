import { useState } from "react"
import {additems,IncrementItems,DecrementItems} from "./cartslicer"
import { useDispatch, useSelector } from "react-redux";

export default function Menuecard({iteminfo}){

    // const [count,setcount]=useState(0);

    // agr duplicate items hai toh mujhe unka count dikhane ke liye local state varible nhi bnana hai tb mai direct qty dall skta hu apne store se value leke
    // yeh sb isliye kyuki mujhe same item ka qty same reflect ho add box me

    const items=useSelector((store)=>store.cartslice.items);
    const element=items.find((item)=>item.id===iteminfo.id);
    const count=element?element.qty:0

    const dispatch=useDispatch();

    function HandleAdditems(){
        // setcount(1);
        dispatch(additems(iteminfo));
    }
    function handleIncrement(){
        // setcount(count+1);
        dispatch(IncrementItems(iteminfo))
    }
    function handleDecrement(){
        // setcount(count-1);
        dispatch(DecrementItems(iteminfo))
    }


    return(
        <>  
        <div className="w-full flex justify-between mb-5">
            <div className="w-[65%] md:w-[70%]">
                <p className="text-xl font-bold text-gray-700 mb-1">{iteminfo?.name}</p>
                <p className="text-lg font-semibold mb-1">₹{iteminfo?.price}</p>
                <div className="flex items-center mb-2">
                    <span className="text-green-800">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 "
                    >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    </span>
                    <span className="text-green-800 font-bold ">{iteminfo?.rating}</span>
                    <span>({iteminfo?.ratingcount})</span>
                </div>
                <p className="text-md text-gray-600">{iteminfo.description}</p>
            </div>
            <div className="w-[35%] md:w-[20%] ">
                <div className="relative">
                <img className="h-32 md:h-36 w-32 md:w-40 object-cover rounded-xl" src={iteminfo.image} loading="lazy" ></img>

                {count==0?(<button className="absolute bottom-[-15px] left-1 md:left-5 w-28 md:w-30 bg-white py-2 rounded-xl font-bold text-green-600 cursor-pointer hover:brightness-75 transition shadow-lg border border-gray-300" onClick={()=>HandleAdditems()}> ADD</button>):
                <div className="flex justify-evenly text-green-600 absolute bottom-[-15px] left-0 md:left-5 w-28 md:w-30 bg-white py-2 px-1 rounded-xl font-bold text-xl shadow-lg border border-gray-300">
                    <p className="cursor-pointer" onClick={()=>handleDecrement()}>-</p>
                    <p>{count}</p>
                    <p className="cursor-pointer" onClick={()=>handleIncrement()}>+</p>
                </div>}
  
                </div>
                <p className="text-gray-500 text-sm ml-6 md:ml-9 mt-4 font-serif">Customisable</p>
            </div>
            
        </div>
         <div className="h-[1px] w-full bg-gray-500 mb-5"></div>
        </>
    )
}