import React, { useContext } from 'react';
import {ReactTyped} from 'react-typed';
import 'animate.css';
import { Helmet } from "react-helmet";

const About = () => {

    return (
        <div className="w-11/12 mx-auto py-16">
            <Helmet>
                <title>About|EcoExplorer</title>
            </Helmet>
            {/* Header Section with React Typed Animation */}
            <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    <ReactTyped
                        strings={["About Us"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop={true}
                    />
                </h2>
                <p className="mt-4 text-lg text-gray-600 px-3">
                    Discover who we are and why we're passionate about eco-friendly adventures and sustainable tourism.
                </p>
            </div>

            {/* Mission and Offer Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 animate__animated animate__fadeIn animate__delay-2s">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                        At EcoExplorer, our mission is to offer unforgettable outdoor adventures that protect and preserve the environment. We believe in making travel more sustainable by promoting eco-friendly tourism that leaves a minimal carbon footprint.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
                    <p className="text-gray-600">
                        We provide a wide variety of adventure packages, including hiking, camping, kayaking, and more, in eco-conscious destinations around the world. Each of our experiences is designed to give you a deep connection with nature while ensuring that local ecosystems are preserved for future generations.
                    </p>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="my-16 text-center animate__animated animate__fadeIn animate__delay-3s">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105">
                        <h4 className="text-xl font-semibold text-green-600 mb-4">Sustainable Travel</h4>
                        <p className="text-gray-600 text-center">We prioritize eco-friendly practices, using sustainable modes of transport and reducing waste during all our activities.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105">
                        <h4 className="text-xl font-semibold text-blue-600 mb-4">Expert Guides</h4>
                        <p className="text-gray-600 text-center">Our experienced guides are passionate about the environment and share their knowledge to ensure you have a meaningful adventure.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105">
                        <h4 className="text-xl font-semibold text-yellow-600 mb-4">Global Destinations</h4>
                        <p className="text-gray-600 text-center">From the mountains to the oceans, our eco-friendly adventures take you to some of the most breathtaking places on Earth.</p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="my-16 animate__animated animate__fadeIn animate__delay-4s">
    <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet Our Team</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Alice Johnson" className="w-24 h-24 rounded-full mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Alice Johnson</h4>
            <p className="text-gray-600">Lead Guide</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="Mark Lee" className="w-24 h-24 rounded-full mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Mark Lee</h4>
            <p className="text-gray-600">Operations Manager</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Jessica Miller" className="w-24 h-24 rounded-full mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Jessica Miller</h4>
            <p className="text-gray-600">Sustainability Officer</p>
        </div>
    </div>
</div>


        </div>
    );
};

export default About;
