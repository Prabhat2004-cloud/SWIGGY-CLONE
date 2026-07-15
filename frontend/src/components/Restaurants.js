import { useEffect, useState } from "react"
import RestCard from "./RestCard"
import Shimmer from "./Shimmer";

export default function Restaurant(){

    const [restdata,setrestdata]=useState([]);


    const fetchRestaurants = async () => {

        const response = await fetch("https://swiggy-backend-a1qy.onrender.com/api/restaurants");

        const data = await response.json();

        setrestdata(data);
    };

    useEffect(()=>{
        fetchRestaurants();
    },[])

    if(restdata.length==0){
        return(
            <Shimmer></Shimmer>
        )
    }

    
    return(
        <>
        <div className="w-[90%] h-0.5 bg-gray-200 mx-auto mt-15"></div>

        <p className="w-[90%] font-bold text-xl mx-auto mt-20">Top restaurant chains in Delhi</p>
        <div className="flex mt-8 gap-6 container mx-auto w-[90%] overflow-x-auto">
            {restdata?.map((restinfo)=><RestCard key={restinfo?.info?.id} restinfo={restinfo} isScroll={true}></RestCard>)}
        </div>

        <div className="w-[90%] h-0.5 bg-gray-200 mx-auto mt-15"></div>

         <p className="w-[90%] font-bold text-xl mx-auto mt-15">Restaurants with online food delivery in Delhi</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6 container mx-auto w-[90%]">
            {restdata?.map((restinfo)=><RestCard key={restinfo?.info?.id} restinfo={restinfo}></RestCard>)}
        </div>
        </>
    )

}