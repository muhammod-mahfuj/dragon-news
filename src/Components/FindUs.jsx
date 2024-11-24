import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const FindUs = () => {
    return (
        <div>
            <h3 className="font-semibold mb-3">Find us On </h3>
            <div className="join join-vertical flex *:w-full *:bg-base-200">
                <button className="btn join-item justify-start"><FaFacebook />FaceBook</button>
                <button className="btn join-item"><FaTwitter />
                Twitter</button>
                <button className="btn join-item justify-end"><FaInstagram />
                Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;