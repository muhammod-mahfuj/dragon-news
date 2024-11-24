import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestsNews from "../Components/LatestsNews";
import LeftNavbar from "../Components/MainComponents/LeftNavbar";
import RightNav from "../Components/MainComponents/RightNav";
import Navbar from "../Components/Navbar";


const HomeLayouts = () => {
    return (
        <div className="font-Poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestsNews></LatestsNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
               <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 pt-5 gap-4">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet/>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;