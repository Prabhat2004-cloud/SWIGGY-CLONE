export default function FoodCard({fooddata}){
    return(
        <div className="min-w-35">
            <a href={fooddata?.action?.link}>
            <img className="w-45 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata?.imageId}></img>
            </a>
        </div>
    )
}