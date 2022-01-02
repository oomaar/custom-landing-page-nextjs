import { Hero, Navbar } from "../components";
import { NextHead } from "../Global/NextHead"

const Home = () => {
    return (
        <div>
            <NextHead />

            <Navbar />
            <Hero />
        </div>
    );
};

export default Home;