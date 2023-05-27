
import { Link } from 'react-router-dom';
import logo from '../../assets/more/logo1.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <>
            <footer className="footer-bg py-10">
                <div className="max-w-7xl mx-auto p-5 ">
                    <div className='font-raleway md:flex justify-between '>
                        <div className='space-y-4 '>
                            <img className='w-20' src={logo} alt="Footer Logo" />
                            <h3 className='text-5xl font-rancho'>Espresso Emporium</h3>
                            <p className=''>Always ready to be your friend. Come & Contact with us to share <br /> your memorable moments, to share with your best companion.</p>
                            <div className='flex gap-4 '>
                                <Link to='https://www.facebook.com/Sohel.webdevoloper/' target="_blank"><FaFacebook className='w-8 h-8' /></Link>
                                <Link to='https://twitter.com/Sohel_Developer' target="_blank"><FaTwitter className='w-8 h-8' /></Link>
                                <Link><FaInstagram className='w-8 h-8' /></Link>
                                <Link><FaLinkedin className='w-8 h-8' /></Link>
                            </div>
                            <h3>Get In Touch</h3>
                            <p className='flex gap-2 items-center'> <FaPhoneAlt />  +88 01533 333 333</p>
                            <p className='flex gap-2 items-center'> <HiOutlineMail /> info@gmail.com</p>
                            <p className='flex gap-2 items-center'> <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka</p>
                        </div>
                        <div className=' w-full mt-5 md:w-1/2'>
                            <h3 className='text-5xl font-rancho'>Connect with Us</h3>
                            <div className='space-y-5 mt-4'>

                                <input className='w-full ps-4 py-2 rounded-md text-black ' type="text" placeholder='Name' /> <br />
                                <input className='w-full ps-4 py-2 rounded-md text-black ' type="email" placeholder='Your Email' /> <br />
                                <textarea className='w-full ps-4 py-2 rounded-md text-black ' type="" placeholder='Your Message' />
                            </div>
                        </div>

                    </div>

                </div>

            </footer>
            <div className='footerBottom'>
                <p className='text-center font-rancho text-white text-xl py-4 '>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;