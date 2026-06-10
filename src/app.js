import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./components/Home";
import Restaurant from "./components/Restaurants";
import RestaurantMenu from "./components/RestaurantMenue"
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Searchfood from "./components/Searchfood";
import Secondary from "./components/secondaryhome";
import { Store } from "./components/store";
import {Provider} from "react-redux"
import Checkout from "./components/checkout";
import SignIn from "./components/Signin";

function App(){

    return(
        <>
        <Provider store={Store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route element={<Secondary></Secondary>}>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/restaurant/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/restaurant/city/delhi/:id/:name/search" element={<Searchfood></Searchfood>}></Route>
            </Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            
        </Routes>

        </BrowserRouter>
        </Provider>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)