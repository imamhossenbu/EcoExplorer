import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import "animate.css";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-5 bg-cover bg-center">
            <div className="text-center w-full max-w-lg mx-auto bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
                    <ReactTyped
                        strings={["404 🕵️‍♂️"]}
                        typeSpeed={100}
                        backSpeed={40}
                        loop={false}
                    />
                </h1>
                {/* Error message with smaller text */}
                <p className="text-sm font-semibold mt-4 text-gray-700 animate__animated animate__fadeIn animate__delay-2s">
                    Whoops! This page cannot be found. 😅
                </p>
                <p className="text-sm text-gray-500 mt-3 animate__animated animate__fadeIn animate__delay-3s">
                    Looks like you’ve gone off the beaten path! 🌍
                </p>

                {/* Action buttons */}
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-4s"
                    >
                        🏠 Head back home
                    </Link>
                </div>

                {/* Optional secondary link to About page */}
                <div className="mt-6">
                    <Link
                        to="/about"
                        className="inline-block text-sm text-blue-500 hover:text-blue-700 transition duration-300"
                    >
                        Or visit our <span className="font-bold">About</span> page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
