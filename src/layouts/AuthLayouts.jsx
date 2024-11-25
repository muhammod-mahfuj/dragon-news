import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayouts = () => {
    return (
        <div className="font-Poppins bg-[#e3e2e2]">
            <header className="py-4 w-11/12 mx-auto ">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;