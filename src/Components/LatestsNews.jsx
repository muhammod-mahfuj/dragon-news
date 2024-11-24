import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestsNews = () => {
    return (
        <div className="flex bg-base-300 p-2 gap-3">
           <p className="bg-[#D72050]  text-white p-2 font-semibold">Latests</p>
           <Marquee pauseOnHover="true" className="gap-10">
               <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, vero?</Link>
               <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, vero?</Link>
               <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, vero?</Link>
           </Marquee>
        </div>
    );
};

export default LatestsNews;