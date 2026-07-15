import  { useState } from "react";
import Menuecard from "./Menucard";

export default function TitleCard({menuinfo,foodselected,bestSellerOnly}){

    const [isopen,setisopen]= useState(true)

    let filteredItems = menuinfo.items;


    if (foodselected === "veg") {
    filteredItems = filteredItems.filter((item) => item.isVeg);
    }

    if (foodselected === "Non veg") {
    filteredItems = filteredItems.filter((item)=> !item.isVeg);
    }

    if (bestSellerOnly) {
    filteredItems = filteredItems.filter((item) => item.isBestseller);
    }

    if(!isopen){
     return(
        <>
        <div className="flex justify-between w-full h-10 ">
        <p className="text-xl text-black font-bold mb-10">{menuinfo.title} ({filteredItems.length})</p>
        <button onClick={()=>setisopen(!isopen)} className="text-gray-600 text-2xl font-bold cursor-pointer">{isopen?"^":"⌄"}</button>
        
        </div>
        <div className="h-5 w-full bg-gray-300 mb-5"></div>
        </>
     )   
    }


    return(
    
        <div className="w-full">
        <div className="flex justify-between w-full h-10">
        <p className="text-xl text-black font-bold mb-10">{menuinfo.title} ({filteredItems.length})</p>
        <button onClick={()=>setisopen(!isopen)} className="text-gray-600 text-2xl font-bold cursor-pointer">{isopen?"^":"⌄"}</button>
        </div>
        {filteredItems?.map((iteminfo)=><Menuecard key={iteminfo.id} iteminfo={iteminfo}></Menuecard>)}
        </div>
    
    )
   
}