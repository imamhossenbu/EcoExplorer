import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const LoginForm = () => {
    const { setUser, login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        login(email, password)
            .then((result) => {
                setUser(result.user);
                toast.success('Log in Successful.', {
                    position: "top-center"
                });
                navigate(location.state?.from || '/');
            })
            .catch((error) => setError(error.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                setUser(result.user);
                toast.success('Log in Successful.', {
                    position: "top-right"
                });
                navigate(location.state?.from || '/');
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
            <Helmet>
                <title>Log In | EcoExplorer</title>
            </Helmet>
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-[42px] text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-gray-700">Remember me</span>
                        </div>
                        <Link 
                            to='/forgot-password' state={{email}}  // Passing email in Link's state
                            className="text-sm text-blue-600 hover:text-blue-800"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Log In
                    </button>
                </form>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-3 mt-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Log in with Google
                </button>

                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-700">Don't have an account? </span>
                    <Link to="/signup" className="text-sm text-blue-600 hover:text-blue-800">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
