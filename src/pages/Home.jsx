import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
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
                <Services></Services>
                <Testimonials></Testimonials>
            </main>
        </div>
    );
};

export default Home;