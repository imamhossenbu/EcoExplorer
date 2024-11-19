import Navbar from "../Components/Navbar"; // Make sure Navbar is imported
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home|EcoExplorer</title>
            </Helmet>
            <header>
                <Banner />
            </header>
            <main>
                <Cards />
                <Services />
                <Testimonials />
            </main>
        </div>
    );
};

export default Home;
