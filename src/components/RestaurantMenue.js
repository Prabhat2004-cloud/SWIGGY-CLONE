import {RestaurantMenusData} from "../utils/RestaurantMenudata"
import { useParams } from "react-router-dom"
import TitleCard from "./TitleCard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RestaurantMenu(){

    const {id}=useParams();
    const [selected,setselected]=useState(null);
    const [bestSellerOnly, setBestSellerOnly] = useState(false);

    const restaurant=RestaurantMenusData[id]

    return(
        <>
        <p className="w-[90%] md:w-[60%] text-2xl md:text-3xl font-bold mx-auto mt-10">{restaurant?.restaurantInfo?.name}</p>
        <div className="flex mx-auto w-[60%] gap-10 font-bold text-lg mt-8 md:pl-6">
            <p>Order Online</p>
            <p>Dineout</p>
        </div>
        <div className="w-[90%] md:w-[60%] mx-auto pl-14 md:pl-6">
            <div className="w-30 h-1 bg-[#ff5200] mt-3 rounded-t-2xl"></div>
        </div>
        
        <div className="w-[90%] md:w-[60%] mx-auto bg-gray-300 mb-5 h-0.5"></div>
     
        
        <div className="w-[90%] md:w-[60%] rounded-b-2xl px-5 pb-5 mb-8   mx-auto bg-gray-100">

          <div className="w-full md:h-36 border border-gray-300 bg-white rounded-2xl p-4">

        <p className="font-bold flex items-center gap-2">
        <span className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-3 h-3"
            >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
        </span>

        <span>
            {restaurant?.restaurantInfo?.rating}({restaurant?.restaurantInfo?.totalRatings} ratings) • {restaurant?.restaurantInfo?.costForTwo}
        </span>
        </p>
        <div className="flex gap-4 mt-4">

            {/* Left Timeline */}
            <div className="flex flex-col items-center mt-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>

            <div className="w-[2px] h-8 bg-gray-300"></div>

            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>

            {/* Right Content */}
            <div>
            <div className="flex items-center gap-2 mb-4 mt-0.5">
                <span className="font-bold">Outlet</span>

                <span className="text-gray-600">
                {restaurant?.restaurantInfo?.area}
                </span>

                <span className="text-[#ff5200] text-xs">
                ▼
                </span>
            </div>

            <p className="font-bold text-lg">
                45-50 mins
            </p>
            </div>

        </div>

        </div>

        </div>
      
        <h1 className="text-center font serif text-gray-600 font-semibold text-3xl">Menu</h1>

        <Link to={"/restaurant/city/delhi/"+id+"/"+restaurant?.restaurantInfo?.name+"/search"}>
        <div className="w-[90%] md:w-[60%] rounded-xl text-lg font-semibold bg-gray-300 flex mx-auto mt-10 justify-center text-gray-700 py-2">
            Search for dishes
        </div>
        </Link>
        <div className="w-[90%] md:w-[60%] flex  mb-20 mt-20 mx-auto gap-4">
            <button className={`border px-4 py-2 rounded-2xl text-md font-semibold cursor-pointer ${selected=='veg'?"bg-green-800":"bg-gray-300"}`} onClick={()=>setselected(selected===null?'veg':null)}>Veg</button>
            <button className={`border px-4 py-2 rounded-2xl text-md font-semibold cursor-pointer ${selected=='Non veg'?"bg-red-800":"bg-gray-300"}`} onClick={()=>setselected(selected===null?'Non veg':null)}>Non Veg</button>
            <button className={`border px-4 py-2 rounded-2xl text-md font-semibold cursor-pointer ${bestSellerOnly==true?"bg-gray-500":"bg-gray-300"}`} onClick={()=>setBestSellerOnly(!bestSellerOnly)}>Bestseller</button>
        </div>
        <div className="w-[90%] md:w-[60%] mx-auto">
          {restaurant?.menuCategories?.map((restinfo)=><TitleCard key={restinfo?.title} menuinfo={restinfo} foodselected={selected} bestSellerOnly={bestSellerOnly}></TitleCard>)}
        </div>
        </>
        

    )
}