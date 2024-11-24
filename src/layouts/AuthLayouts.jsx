import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayouts = () => {
    return (
        <div className="font-Poppins bg-[#a9a6a6]">
            <header className="py-4 w-11/12 mx-auto ">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;