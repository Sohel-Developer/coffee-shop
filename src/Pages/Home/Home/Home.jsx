import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Gellary from "../Gellary/Gellary";
import PopularProduct from "../PopularProduct/PopularProduct";


const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <PopularProduct />
            <Gellary />
        </div>
    );
};

export default Home;