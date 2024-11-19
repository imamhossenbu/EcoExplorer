import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
    const { setUser, signup, googleLogin, manageProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!name || !photoUrl || !email || !password) {
            setError("All fields are required.");
            setSuccess('');
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            setSuccess('');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError("Password must be at least 6 characters, include one uppercase letter, one number, and one special character.");
            setSuccess('');
            return;
        }

        signup(email, password)
            .then((result) => {
                const data = result.user;
                setUser(data);
                manageProfile(name, photoUrl) // Pass the name and photoUrl here
                    .then(() => {
                        toast.success('Sign up Successful.', { position: "top-center" });
                        navigate('/');
                        setSuccess('Signup Successful!');
                        setError('');
                    })
                    .catch((error) => setError(error.message));
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                setUser(result.user);
                toast.success('Sign in Successful.', { position: "top-center" });
                navigate('/');
            })
            .catch((error) => setError(error.message));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label for="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label for="photoUrl" className="block text-sm font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label for="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6 relative">
                        <label for="password" className="block text-sm font-semibold text-gray-700">Password</label>
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
                            className="absolute right-3 top-[50px] md:top-[40px] lg:top-[50px] transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>

                    </div>


                    {/* Error message */}
                    {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                    {/* Success message */}
                    {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-3 mt-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Sign in with Google
                </button>

                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-700">Already have an account? </span>
                    <a href="/login" className="text-sm text-blue-600 hover:text-blue-800">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
