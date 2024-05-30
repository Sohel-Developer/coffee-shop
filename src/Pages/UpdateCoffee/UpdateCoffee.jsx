import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateCoffee = () => {
    const navigate = useNavigate()

    const data = useLoaderData()

    const { name, chef, supplier, taste, category, details, img, price } = data;


    const updateCoffe = (e) => {
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

        axios.put(`https://coffee-shop-server-ynia.onrender.com/coffee/${data._id}`, saveData)
            .then((res) => {
                const data = res.data;
                if (data.modifiedCount > 0) {
                    navigate('/')
                    toast.success('Updated Successfully')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }





    return (
        <section className="addCoffeSection ">
            {/* Dynamic Title  */}
            <Helmet>
                <title> Espresso Emporium | UpdateCoffee</title>
            </Helmet>

            <div className="max-w-7xl mx-auto p-5">
                <div className="flex items-center gap-2 text-3xl font-rancho my-5">
                    <FaLongArrowAltLeft /> <Link to='/'>  Back To Home</Link>
                </div>

                <div className="bg-[#F4F3F0] p-20 rounded-lg ">

                    <div className="text-center space-y-5">
                        <h2 className="text-5xl font-rancho">Update Existing Coffee Details</h2>
                        <p className="font-raleway w-2/3 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    </div>


                    <div className="card flex-shrink-0 w-full  shadow-2xl ">
                        <form onSubmit={updateCoffe} className="card-body">
                            <div className="flex gap-10 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input defaultValue={name} name="name" type="text" placeholder="Enter Coffee Name" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input defaultValue={chef} name="chef" type="text" placeholder="Enter Chef Name" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-10 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" defaultValue={supplier} name="supplier" placeholder="Enter coffee supplier" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input defaultValue={taste} name="taste" type="text" placeholder="Enter coffee taste" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-10 ">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input defaultValue={category} name="category" type="text" placeholder="Enter coffee category" className="input input-bordered" />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input defaultValue={details} name="details" type="text" placeholder="Enter coffee details" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input defaultValue={price} name="price" type="number" placeholder="Price" className="input input-bordered" />

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input defaultValue={img} name="img" type="text" placeholder="Enter photo URL" className="input input-bordered" />

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="bg-[#D2B48C] font-rancho text-2xl py-2 rounded-md cursor-pointer " value='Update Coffee Details' />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default UpdateCoffee;