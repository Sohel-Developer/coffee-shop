import { FaCoffee } from "react-icons/fa";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";



const PopularProduct = () => {

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCoffees(data)
            })
    }, [])



    return (
        <section className="features">

            <div className="max-w-7xl p-5 my-10 mx-auto">
                <div className="text-center space-y-5">
                    <p>--- Follow Us Now ---</p>
                    <h2 className="font-rancho  text-6xl">Follow on Instagram </h2>
                    <div className="flex justify-center">
                        <Link to='/addCoffee' className="  font-rancho rounded-md border-2 border-black flex items-center gap-2 bg-[#E3B577] py-2 px-5 ">Add Coffee
                            <FaCoffee /> </Link>
                    </div>
                </div>

                <div className="my-10 grid md:grid-cols-2 gap-10">

                    {
                        coffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }

                </div>

            </div>
        </section>
    );
};

export default PopularProduct;