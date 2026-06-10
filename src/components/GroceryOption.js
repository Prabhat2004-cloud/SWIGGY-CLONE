import { GroceryGridCards } from "../utils/grocerydata";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    return(
        <>
        <h2 className="max-w-[80%] container mx-auto mt-20 md:mt-25 font-serif font-bold text-2xl md:text-3xl text-black">Shop groceries on Instamart</h2>
        <div className="max-w-[80%] flex flex-nowrap overflow-x-auto gap-10 container mx-auto mt-6">
            {GroceryGridCards.map((Grocerydata)=><GroceryCard key={Grocerydata.id} Grocerydata={Grocerydata}></GroceryCard>)}
        </div>
        </>
    )
} 