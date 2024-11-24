import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h3 className="font-semibold mb-3">LogIn With</h3>
            <div className="*:w-full space-y-2 ">
               <Link to="auth/login" className="btn"><FaGoogle />LogIn With Google</Link>
               <button className="btn"><FaGithub />LogIn With GitHub</button>
            </div>
        </div>
    );
};

export default Login;