import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Cartcard from "./Cartcard";
import { useState } from "react";

export default function Checkout(){
    const items=useSelector((store)=>store.cartslice.items);
    const count=useSelector((store)=>store.cartslice.count);

    const [coupon, setCoupon] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState("");
    const discount =appliedCoupon === "SWIGGY50" ? 50 : 0;
    const delivery=40;

    let total=0;
    for(const item of items){
        total+=item.price*item.qty;
    }
    const subtotal=total+delivery-discount ;

    if(items.length==0){
        return(
            <div className=" min-h-screen flex flex-col justify-center items-center">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                className="object-cover h-64 w-60"></img>

                <p className="font-bold text-xl mt-5">Your cart is empty</p>
                <p className="text-sm mt-3 text-gray-600 font-semibold">You can go to home page to view more restaurants</p>
                <Link to={"/"}>
                <div className=" mt-7 px-4 py-2 text-sm text-white bg-[#ff5200] font-bold">SEE RESTAURANTS NEAR YOU</div>
                </Link>


            
            </div>
        )
    }
    return(
        <>
        
        <div className="w-[90%] md:w-[50%] container mx-auto mt-10">
            <h1 className="font-bold text-3xl mb-10 text-center">Your Cart({count}) </h1>
            {items.map((info)=><Cartcard key={info.id} info={info}></Cartcard>)}

            <div className="mt-8 border-2 border-gray-300 py-4  rounded-xl flex justify-between px-6">
                <p className="font-semibold mb-2 text-xl">
                    Apply Coupon
                </p>
                <div className="flex flex-col gap-2 md:block">
                <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter Coupon"
                    className="border px-1 md:px-3 py-2 rounded-lg"
                />
                <button onClick={() => setAppliedCoupon(coupon)}
                    className="bg-[#ff5200] text-white px-1 md:px-5 py-2 rounded-xl font-semibold  md:ml-2"
                >
                    Apply
                </button>
                </div>
            </div>

            <div className="border-2 border-gray-300 rounded-2xl p-5 mt-6">

            <h2 className="font-bold text-xl mb-4">
                Bill Details
            </h2>

            <div className="flex justify-between mb-3">
                <span>Item Total</span>
                <span>₹{total}</span>
            </div>

            <div className="flex justify-between mb-3">
                <span>Delivery Fee</span>
                <span>₹{delivery}</span>
            </div>

            <div className="flex justify-between mb-3 text-green-600">
                <span>Discount</span>
                <span>-₹{discount}</span>
            </div>
    
            <hr className="my-4" />

            <div className="flex justify-between font-bold text-xl">
                <span>To Pay</span>
                <span>₹{subtotal}</span>
            </div>

            </div>

            <button className="w-full mt-5 mb-5 py-3 bg-[#ff5200] text-white font-bold rounded-xl hover:brightness-95 transition">
            Proceed to Checkout
            </button>
        </div>
        </>
    )
}