import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto px-4 text-center">
                {/* Logo and Tagline */}
                <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="EcoExplorer Logo" className="w-16 h-16 mb-3 rounded-full" />
                    <h2 className="text-2xl font-bold text-white">EcoExplorer</h2>
                    <p className="text-sm">A Eco-Adventure Experiences</p>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    <Link to="/" className="hover:text-green-500">Home</Link>
                    <Link to="/about" className="hover:text-green-500">About Us</Link>
                    <Link to="#" className="hover:text-green-500">Services</Link>
                    <Link to="/contact" className="hover:text-green-500">Contact Us</Link>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://www.facebook.com/imamhossainbu?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-400">
                        <FaInstagram size={24} />
                    </a>
                </div>

                {/* Contact Information */}
                <p className="text-sm mb-3">
                    © {new Date().getFullYear()} EcoExplorer. All rights reserved.
                </p>
                <p className="text-xs">
                123 Adventure St., Eco City, USA | Phone: +1 234 567 890
                </p>
            </div>
        </footer>
    );
};

export default Footer;
