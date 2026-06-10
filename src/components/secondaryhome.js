import { Outlet } from "react-router-dom";
import RestHeader from "./restheader";
import Footer from "./Footer";

export default function Secondary(){
    return(
        <>
        <RestHeader></RestHeader>
        <div className="pt-20">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    )
}