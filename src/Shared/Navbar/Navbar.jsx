
import './Navbar.css'

import logo from '../../assets/more/logo1.png'

const Navbar = () => {
    return (
        <div className="navbar  py-4 px-5 flex items-center justify-center ">
            <img src={logo} className='w-16 mr-5' alt="Logo" />
            <h2 className='text-white text-6xl'>Espresso Emporium</h2>

        </div>
    );
};

export default Navbar;