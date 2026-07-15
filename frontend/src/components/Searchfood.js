import { useParams } from "react-router-dom";
import { RestaurantMenusData } from "../utils/RestaurantMenudata";
import { useState } from "react";
import Menuecard from "./Menucard";
export default function Searchfood(){

    const { id } = useParams();

    const restaurant = RestaurantMenusData[id];
    const allitems = restaurant?.menuCategories?.flatMap((category)=> category.items)

    const [searchtext,setsearchtext]=useState("");

    const filteredItems= allitems?.filter((item)=>item.name.toLowerCase().includes(searchtext.toLowerCase()))
    
    if(searchtext.length >= 1){
        
        return(
        <div className="mx-auto w-[90%] md:w-[60%]">
        <input type="text" value={searchtext} placeholder={`Search in ${restaurant?.restaurantInfo?.name}`} onChange={(e)=>setsearchtext(e.target.value)} className="border p-3 w-full rounded-xl mx-auto mt-20 mb-20 focus:outline-none"></input>
        
        {filteredItems?.map((iteminfo)=><Menuecard key={iteminfo.id} iteminfo={iteminfo}></Menuecard>)}
        </div>
       )
    }
    return(
        <div className="mx-auto w-[60%]">
        <input type="text" value={searchtext} placeholder={`Search in ${restaurant?.restaurantInfo?.name}`} onChange={(e)=>setsearchtext(e.target.value)} className="border p-3 w-full rounded-xl mx-auto mt-20 mb-20 focus:outline-none"></input>
        </div>
    )
}