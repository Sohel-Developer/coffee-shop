import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";

import img from '../../assets/coffee/1.png'


const Details = () => {
    return (
        <section className="addCoffeSection mb-10 ">
            {/* Dynamic Title */}
            <Helmet>
                <title> Espresso Emporium | Details</title>
            </Helmet>

            <div className="max-w-7xl mx-auto p-5">
                <div className="flex items-center gap-2 text-3xl font-rancho my-5">
                    <FaLongArrowAltLeft /> <Link to='/'>  Back To Home</Link>
                </div>

                {/* 
                    Name:  Americano Coffee
                    Chef:  Mr. Matin Paul
                    Supplier:  Cappu Authorizer
                    Taste:  Sweet and hot
                    Category:  Americano
                    Details:  Espresso with hot water
                */}

                <div className="bg-[#F4F3F0] p-20 rounded-lg md:flex   items-center  ">


                    <div className="w-full md:w-1/2">
                        <img className=" w-full md:w-1/2 mx-auto" src={img} alt="" />
                    </div>
                    <div className="space-y-2">
                        <p> <span className="font-bold">Name:</span> Americano Coffee </p>
                        <p> <span className="font-bold">Chef:</span> Mr. Matin Paul</p>
                        <p> <span className="font-bold">Supplier:</span> Cappu Authorizer</p>
                        <p> <span className="font-bold">Taste:</span> Cappu Authorizer</p>
                        <p> <span className="font-bold">Category:</span> Americano</p>
                        <p> <span className="font-bold">Details:</span> Espresso with hot water</p>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Details;