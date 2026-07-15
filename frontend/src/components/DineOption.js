import {DineoutRestaurants} from "../utils/dinedata"
import Dinecard from "./DineCard"

export default function DineOption(){
    return(
        <>
        <div className="max-w-[80%] mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-bold font-serif">Discover best restaurants on Dineout</h2>
        <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5">
            {DineoutRestaurants?.map((dinedata)=><Dinecard key={dinedata?.info?.id} dinedata={dinedata}></Dinecard>)}
        </div>
         <div className="w-full mt-20" id="download-app"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" className="object-cover"></img></div>
        </div>

       
        </>
    )
}