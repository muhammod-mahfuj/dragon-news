import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext)

    
   
    return (
        <div className='flex justify-between items-center py-2'>
            <div className="">{user && user.email
            }</div>
            <div className="nav flex space-x-4">
                 <Link to='/'>Home</Link>
                 <Link to='/career'>Career</Link>
                 <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="img">
                    <Link to='/auth/register'> <img src={userIcon}  alt="" /> </Link>
                </div>
                {
                    user && user?.email ? 
                    <button onClick={logOut}  className="btn btn-neutral">LogOut</button> : 
                    <Link to='/auth/login' className="btn btn-neutral">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;