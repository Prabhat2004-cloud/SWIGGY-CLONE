
export default function Dinecard({dinedata}){
    return (
        <div className="flex-none md:max-w-sm ">
    
        <div className="relative">
            <a href={dinedata?.cta?.link}>
            <img className="h-40 md:h-48 w-72 md:w-80 object-cover rounded-2xl"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dinedata?.info?.mediaFiles[0].url}></img>
             <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

            <p className="absolute left-2 bottom-2 font-bold font-serif text-xl text-white"> {dinedata?.info?.name}</p>
            <p className="absolute right-2 bottom-2 font-bold font-serif text-xl text-white"> {dinedata?.info?.rating?.value}</p>
        </a>

        </div>

        <div className="px-2 py-3"></div>
            
        </div>


    )
}