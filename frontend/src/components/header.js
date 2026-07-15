import {Link,useNavigate} from "react-router-dom"
export default function Headers(){

    const token=localStorage.getItem("token");
    const navigate=useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    };

    return(
        <>
        <header className="bg-[#ff5200] font-serif">

            <div className="flex justify-between py-8 px-4 container mx-auto">

            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" className="w-28 md:w-40 h-auto"></img>
            <div className="flex gap-3 md:gap-10  text-[#ffffff] text-sm md:text-base font-bold items-center">
                <a  href="https://www.swiggy.com/corporate/" className="hidden md:block">Swiggy Corporate</a>
                <a href="https://partner.swiggy.com/food/login" className="hidden md:block">Partner with us</a>
                <a className="border-[#fff] border py-3 px-4 rounded-2xl cursor-pointer"onClick={() =>document.getElementById("download-app")?.scrollIntoView({behavior: "smooth"})}>Get the App</a>
                {
                    token ? (
                        <button onClick={handleLogout} className="border-black border bg-black py-3 md:py-3 px-3 md:px-5 rounded-2xl">
                        Logout
                        </button>
                        ) : (
                        <Link
                        to="/signin"
                        className="border-black border bg-black py-3 md:py-3 px-3 md:px-5 rounded-2xl"
                        >
                        Sign In
                        </Link>
                        )
                }
            </div>

            </div>

            <div className="pt-12 md:pt-16 pb-8 relative">
                <img className="h-112 w-62 absolute top-0 left-0 hidden md:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-112 w-62 absolute top-0 right-0 hidden md:block" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className=" max-w-[90%] md:max-w-[60%] font-bold text-3xl md:text-5xl text-[#fff] container mx-auto text-center leading-tight">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[90%] md:max-w-[70%] flex flex-col md:flex-row gap-5 container mx-auto pt-10 justify-center">
                  <input className="bg-[#fff] py-4 px-6 w-full md:w-[35%] text-base md:text-xl rounded-2xl" placeholder="Enter your delivery location"></input>
                  <input className="bg-[#fff] py-4 px-6 w-full md:w-[50%]  text-base md:text-xl rounded-2xl" placeholder="Search for restaurant,item or more"></input>
                </div>
            </div>

            <div className="max-w-[95%] md:max-w-[80%] container mx-auto grid grid-cols-2 md:flex">
                <Link to="/restaurant" className="col-span-2">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"className="w-full" ></img>
                </Link>
                 <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" className="col-span-1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" className="w-full"></img>
                </a>
                 <a href="https://www.swiggy.com/dineout" className="col-span-1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" className="w-full"></img>
                </a>
              
            </div>

        </header>
        
        </>
    )
}