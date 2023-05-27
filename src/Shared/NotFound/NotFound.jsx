import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";

import error from '../../assets/404/404.gif'


const NotFound = () => {
    return (
        <section className="addCoffeSection ">
            {/* Dynamic Title */}
            <Helmet>
                <title> Espresso Emporium | Error Page</title>
            </Helmet>

            <div className="max-w-7xl mx-auto p-5">
                <div className="flex items-center gap-2 text-3xl font-rancho my-5">
                    <FaLongArrowAltLeft /> <Link to='/'>  Back To Home</Link>
                </div>

                <div className="flex justify-center ">
                    <img src={error} alt="Error-Image" />
                </div>
            </div>

        </section >
    );
};

export default NotFound;