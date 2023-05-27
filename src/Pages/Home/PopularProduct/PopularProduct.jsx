import { FaCoffee, FaEye, FaPen, FaTrash } from "react-icons/fa";

import coffe1 from '../../../assets/coffee/1.png'
import { Link } from "react-router-dom";
// import coffe2 from '../../../assets/coffee/2.png'
// import coffe3 from '../../../assets/coffee/3.png'
// import coffe4 from '../../../assets/coffee/4.png'
// import coffe5 from '../../../assets/coffee/5.png'
// import coffe6 from '../../../assets/coffee/6.png'



const PopularProduct = () => {
    return (
        <section className="features">

            <div className="max-w-7xl p-5 my-10 mx-auto">
                <div className="text-center space-y-5">
                    <p>--- Follow Us Now ---</p>
                    <h2 className="font-rancho  text-6xl">Follow on Instagram</h2>
                    <div className="flex justify-center">
                        <Link to='/addCoffee' className="  font-rancho rounded-md border-2 border-black flex items-center gap-2 bg-[#E3B577] py-2 px-5 ">Add Coffee
                            <FaCoffee /> </Link>
                    </div>
                </div>

                {/* 
                
                     Name:  Americano Coffee
                     Chef:  Mr. Matin Paul
                    Price:  890 Taka*/}

                <div className="my-10 grid md:grid-cols-2 gap-10">
                    <div className="bg-[#F5F4F1] p-10 flex items-center justify-between font-raleway rounded-md">
                        {/* Images */}
                        <div>
                            <img src={coffe1} alt="Coffee" />
                        </div>
                        {/* Coffe Information */}
                        <div className="space-y-5">
                            <p> <span className="font-bold">Name:</span> Americano Coffee </p>
                            <p> <span className="font-bold">Chef:</span> Mr. Matin Paul</p>
                            <p> <span className="font-bold">Price:</span> 890 Taka</p>
                        </div>
                        {/* Action Button */}
                        <div className="space-y-5">
                            <div className="  bg-[#D2B48C] p-2 rounded-md">
                                <Link to='/details'><FaEye className="text-white w-5 h-5 " /></Link>
                            </div>
                            <div className="bg-[#3C393B] p-2 rounded-md">
                                <FaPen className="text-white w-5 h-5 " />

                            </div>
                            <div className="bg-[#EA4744] p-2 rounded-md">
                                <FaTrash className="text-white w-5 h-5 " />

                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F5F4F1] p-10 flex items-center justify-between font-raleway rounded-md">
                        {/* Images */}
                        <div>
                            <img src={coffe1} alt="Coffee" />
                        </div>
                        {/* Coffe Information */}
                        <div className="space-y-5">
                            <p> <span className="font-bold">Name:</span> Americano Coffee </p>
                            <p> <span className="font-bold">Chef:</span> Mr. Matin Paul</p>
                            <p> <span className="font-bold">Price:</span> 890 Taka</p>
                        </div>
                        {/* Action Button */}
                        <div className="space-y-5">
                            <div className="  bg-[#D2B48C] p-2 rounded-md">
                                <FaEye className="text-white w-5 h-5 " />
                            </div>
                            <div className="bg-[#3C393B] p-2 rounded-md">
                                <FaPen className="text-white w-5 h-5 " />

                            </div>
                            <div className="bg-[#EA4744] p-2 rounded-md">
                                <FaTrash className="text-white w-5 h-5 " />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PopularProduct;