import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import 'animate.css';


const Root = () => {
    return (
        <div>
            <section className="h-full">
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>

        </div>
    );
};

export default Root;