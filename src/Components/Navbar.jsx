import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user } = useContext(AuthContext)
    console.log("HI Im talking from navbar",user)
    return (
        <div className='flex justify-between items-center py-2'>
            <div className="">{user && user.user}</div>
            <div className="nav flex space-x-4">
                 <Link to='/'>Home</Link>
                 <Link to='/career'>Career</Link>
                 <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="img">
                    <img src={userIcon} alt="" />
                </div>
                <Link to='/auth/login' className="btn btn-neutral">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;