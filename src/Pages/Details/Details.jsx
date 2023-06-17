import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";



const Details = () => {


    const data = useLoaderData()

    const { name, chef, supplier, taste, category, details, img, price } = data;

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

                <div className="bg-[#F4F3F0] p-20 rounded-lg md:flex   items-center  ">


                    <div className="w-full md:w-1/2">
                        <img className=" w-full md:w-1/2 mx-auto" src={img} alt="" />
                    </div>
                    <div className="space-y-2">
                        <p> <span className="font-bold">Name:</span> {name} </p>
                        <p> <span className="font-bold">Chef:</span> {chef}</p>
                        <p> <span className="font-bold">Supplier:</span> {supplier}</p>
                        <p> <span className="font-bold">Taste:</span> {taste}</p>
                        <p> <span className="font-bold">Category:</span> {category}</p>
                        <p> <span className="font-bold">Details:</span> {details}</p>
                        <p> <span className="font-bold">Price: $ </span> {price}</p>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Details;