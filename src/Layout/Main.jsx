import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className=' flex-grow'>
                <Outlet />
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Footer />
        </div>
    );
};

export default Main;