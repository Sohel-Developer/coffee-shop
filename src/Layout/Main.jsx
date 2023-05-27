import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className=' flex-grow'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;