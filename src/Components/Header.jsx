import moment from 'moment/moment';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col py-4 space-y-3 justify-center items-center'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <h3 className='text-gray-500 '>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;