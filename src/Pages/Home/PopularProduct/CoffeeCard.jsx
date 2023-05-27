import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const CoffeeCard = ({ coffee }) => {
    const { name, img, chef, _id } = coffee;
    return (
        <div className="bg-[#F5F4F1] p-10 flex items-center justify-between font-raleway rounded-md">
            {/* Images */}
            <div>
                <img src={img} alt="Coffee" />
            </div>
            {/* Coffe Information */}
            <div className="space-y-5">
                <p> <span className="font-bold">Name:</span> {name} </p>
                <p> <span className="font-bold">Chef:</span> {chef}</p>
                <p> <span className="font-bold">Price:</span> 890 Taka</p>
            </div>
            {/* Action Button */}
            <div className="space-y-5">
                <div className="  bg-[#D2B48C] p-2 rounded-md">
                    <Link to={`/coffee/${_id}`}><FaEye className="text-white w-5 h-5 " /></Link>
                </div>
                <div className="bg-[#3C393B] p-2 rounded-md">
                    <Link to='/update'> <FaPen className="text-white w-5 h-5 " /></Link>

                </div>
                <div className="bg-[#EA4744] p-2 rounded-md">
                    <FaTrash className="text-white w-5 h-5 " />

                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;