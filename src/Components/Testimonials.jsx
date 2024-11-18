import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import {ReactTyped} from "react-typed";  // Correct import

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="my-20">
            <h1 className="text-center text-3xl font-bold py-6 animate__animated animate__lightSpeedInRight">
                <ReactTyped
                    strings={["Customer Testimonials", "What Our Customers Say", "Reviews from Happy Adventurers", "Client Feedback", "Success Stories"]}
                    typeSpeed={40}
                    backSpeed={30}
                    loop
                />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
                {
                    testimonials.map((testimonial, index) => <Testimonial key={index} data={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;
