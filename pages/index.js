import { About, Hero, Navbar } from "../components";
import { Services } from "../containers";
import { NextHead } from "../Global/NextHead"

const Home = () => {
    return (
        <div>
            <NextHead />

            <Navbar />
            <Hero />
            <Services />
            <About />
        </div>
    );
};

export default Home;