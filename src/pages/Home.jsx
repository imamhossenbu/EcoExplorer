import Navbar from "../Components/Navbar"; // Make sure Navbar is imported
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Home = () => {
    return (
        <div>
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
