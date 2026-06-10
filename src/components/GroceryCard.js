export default function GroceryCard({Grocerydata}){

    return(
        <div className="flex-none">
            <a href={Grocerydata?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ Grocerydata?.imageId}></img>
            </a>
    
            <h2 className="max-w-36 conatiner-mx auto text-center text-xl font-serif mt-3 font-bold text-gray-700">{Grocerydata?.action?.text}</h2>
        
        </div>
    )
}