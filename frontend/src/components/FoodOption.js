import { imageGridCards } from "../utils/fooddata"
import FoodCard from "./FoodCard"

export default function FoodOption(){
    
    return(
        <>     
        <h2 className="max-w-[80%] container mx-auto mt-20 md:mt-25 font-serif font-bold text-2xl md:text-3xl text-black">Order our best food options</h2>
        <div className="max-w-[80%] container mx-auto mt-6 overflow-x-auto">
            <div className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-3">
            {
                imageGridCards.map((fooddata)=><FoodCard key={fooddata.id} fooddata={fooddata}></FoodCard>)
            }
            </div>
    

        </div>
           
        </>
    )
}