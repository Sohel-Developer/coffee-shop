import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Gellary from "../Gellary/Gellary";
import PopularProduct from "../PopularProduct/PopularProduct";


const Home = () => {
    return (
        <>
            {/* Dynamic Title */}
            <Helmet>
                <title> Espresso Emporium | Home</title>
            </Helmet>

            <Banner />
            <Features />
            <PopularProduct />
            <Gellary />
        </>
    );
};

export default Home;