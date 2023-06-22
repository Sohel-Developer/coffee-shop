import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-hot-toast";


const AddCoffee = () => {

    const navigate = useNavigate()

    const addCoffe = (e) => {
        e.preventDefault()

        const from = e.target;
        const name = from.name.value;
        const chef = from.chef.value;
        const supplier = from.supplier.value;
        const taste = from.taste.value;
        const category = from.category.value;
        const details = from.details.value;
        const img = from.img.value;
        const price = from.price.value;

        const saveData = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            img,
            price

        }

        axios.post(`https://coffee-shop-server-ten.vercel.app/coffee`, saveData,

        )
            .then((res) => {
                const data = res.data;
                console.log(data);
                if (data.insertedId) {
                    navigate('/')
                    toast.success('Add Successfully')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }










    return (
        <section className="addCoffeSection ">
            {/* Dynamic Title */}
            <Helmet>
                <title> Espresso Emporium | AddCoffee</title>
            </Helmet>

            <div className="max-w-7xl mx-auto p-5">
                <div className="flex items-center gap-2 text-3xl font-rancho my-5">
                    <FaLongArrowAltLeft /> <Link to='/'>  Back To Home</Link>
                </div>

                <div className="bg-[#F4F3F0] p-20 rounded-lg ">

                    <div className="text-center space-y-5">
                        <h2 className="text-5xl font-rancho">Add New Coffee</h2>
                        <p className="font-raleway w-2/3 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    </div>


                    <div className="card flex-shrink-0 w-full  shadow-2xl ">
                        <form onSubmit={addCoffe} className="card-body">
                            <div className="flex gap-10 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Enter Coffee Name" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input name="chef" type="text" placeholder="Enter Chef Name" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-10 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input name="taste" type="text" placeholder="Enter coffee taste" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-10 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input name="category" type="text" placeholder="Enter coffee category" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input name="details" type="text" placeholder="Enter coffee details" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name="price" type="number" placeholder=" Price " className="input input-bordered" />

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input name="img" type="text" placeholder="Enter photo URL" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="bg-[#D2B48C] font-rancho text-2xl py-2 rounded-md cursor-pointer " value='Add Coffe' />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AddCoffee;