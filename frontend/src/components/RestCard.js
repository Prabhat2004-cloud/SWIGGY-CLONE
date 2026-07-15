import { Link } from "react-router-dom"
export default function RestCard({restinfo,isScroll}){
    return(
        <Link to={"/restaurant/city/delhi/"+ restinfo?.info.id}>
        <div className={`${isScroll?"w-48 md:w-72":"w-full"} shrink-0 mb-5 transform transition duration-100 hover:scale-95`}>
            <div className="relative overflow-hidden rounded-2xl">
            <img className={`${isScroll?"w-48 md:w-72":"w-full"} h-32 md:h-48 object-cover rounded-2xl`} src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo.info.cloudinaryImageId}></img>
           <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/90 to-transparent rounded-b-2xl overflow-hidden"></div>
           
            <div className="font-bold text-white text-2xl absolute left-3 bottom-2">{restinfo?.info?.aggregatedDiscountInfoV3?.subHeader}</div>
            </div>

            <div className="w-[90%] mx-auto mt-3 truncate">
            <div className="font-bold text-xl truncate">{restinfo?.info?.name}</div>
            <div className="flex gap-2 items-center ">
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

            <span className="text-lg">{restinfo?.info?.avgRating}</span>
            <span className="text-lg font-semibold">{restinfo?.info?.sla?.slaString}</span>

            </div>
            <div className="text-lg text-gray-700 truncate">{restinfo?.info?.cuisines.join(", ")} </div>
            <div className="text-lg text-gray-700 truncate">{restinfo?.info?.areaName} </div>
            </div>

        </div>
        </Link>
    )

}