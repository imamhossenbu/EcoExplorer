import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {ReactTyped} from "react-typed";
import "animate.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="relative bg-gradient-to-br from-green-100 to-blue-100 py-20 lg:py-28">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('https://example.com/contact-bg.jpg')] opacity-10 bg-cover bg-center"></div>

            {/* Title Section with React Typed */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-800 animate__animated animate__fadeInDown animate__delay-1s">
                    <ReactTyped
                        strings={["Get in Touch with Us"]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop={true}
                    />
                </h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    We are here to help you! Feel free to drop us a message with any questions, feedback, or suggestions.
                </p>
            </div>

            {/* Contact Form */}
            <div className="w-11/12 lg:w-2/5 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8 bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl animate__animated animate__fadeInUp">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-5 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 resize-none"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Information Section */}
            <div className="mt-20 text-center lg:text-left max-w-3xl mx-auto">
                <h3 className="text-3xl font-semibold text-gray-800 mb-8">Reach Us at</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 animate__animated animate__fadeIn">
                    {/* Address */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <FaMapMarkerAlt className="text-4xl text-green-600" />
                        <h4 className="font-semibold text-xl">Visit Us</h4>
                        <p>123 Adventure St., Eco City, USA</p>
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <FaPhoneAlt className="text-4xl text-blue-600" />
                        <h4 className="font-semibold text-xl">Call Us</h4>
                        <p>+1 234 567 890</p>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col items-center md:items-start space-y-3">
                        <FaEnvelope className="text-4xl text-yellow-600" />
                        <h4 className="font-semibold text-xl">Email Us</h4>
                        <p>contact@ecoexplorer.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
