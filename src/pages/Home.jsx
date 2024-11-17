import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main>
                <Cards></Cards>
            </main>
        </div>
    );
};

export default Home;