import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <div className="bg-[#f5f5f6] mt-20 border-t">

    <div className="w-[80%] mx-auto py-14">

        <h1 className="text-4xl md:text-5xl font-bold text-[#ff5200] mb-4">
            Swiggy Clone
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-12">
            Discover restaurants, explore menus, search your favourite dishes,
            apply coupons and manage your cart seamlessly.
        </p>

        <div className="flex gap-4 md:gap-40 mb-12">

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Quick Links
                </h2>

                <div className="flex flex-col gap-2 text-gray-600">
                  
                    <Link to={"/"}  onClick={() =>window.scrollTo({top: 0, behavior: "smooth",})}><p>Home</p></Link>
                    <p>Search</p>
                    <Link to={"/checkout"}><p>Cart</p></Link>
                    <Link to={"/signin"} ><p>Sign In</p></Link>
                </div>
            </div>

            <div>
                <h2 className="hidden md:block text-2xl font-bold mb-4">
                    Features
                </h2>

                <div className="hidden md:flex flex-col gap-2 text-gray-600">
                    <p>Restaurant Listing</p>
                    <p>Restaurant Menu</p>
                    <p>Veg Filter</p>
                    <p>Non-Veg Filter</p>
                    <p>Bestseller Filter</p>
                    <p>Coupon Support</p>
                </div>
            </div>

            <div>
                <h2 className="hidden md:block text-2xl font-bold mb-4">
                    Technologies
                </h2>

                <div className="hidden md:flex flex-col gap-2 text-gray-600">
                    <p>React</p>
                    <p>Redux Toolkit</p>
                    <p>Tailwind CSS</p>
                    <p>React Router</p>
                    <p>Parcel</p>
                </div>
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Highlights
                </h2>

                <div className="flex-col gap-2 text-gray-600">
                    <p>Dynamic Routing</p>
                    <p>Restaurant Search</p>
                    <p>Accordion Menus</p>
                    <p>Redux Cart</p>
                    <p>Filters</p>
                    <p>Responsive Design</p>
                </div>
            </div>

        </div>

        <div className="h-px bg-gray-300"></div>

        <div className="flex justify-between mt-6 text-gray-500">

            <p>
                © 2026 Swiggy Clone. Developed by Prabhat Kumar.
            </p>

            <p>
                Built with React, Redux Toolkit & Tailwind CSS.
            </p>

        </div>

    </div>

</div>
    )
}