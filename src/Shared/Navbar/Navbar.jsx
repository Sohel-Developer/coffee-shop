
import './Navbar.css'

import logo from '../../assets/more/logo1.png'

const Navbar = () => {
    return (
        <div className="menubar  py-4   flex items-center justify-center ">
            <img src={logo} className='w-16 mr-5' alt="Logo" />
            <h2 className='text-white font-rancho text-6xl'>Espresso Emporium</h2>

        </div>
    );
};

export default Navbar;