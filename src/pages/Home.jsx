import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";


const Home = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main>
                <Cards></Cards>
                <Testimonials></Testimonials>
                <Services></Services>
            </main>
        </div>
    );
};

export default Home;