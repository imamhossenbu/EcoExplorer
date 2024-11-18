import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { setUser, signup, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

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
                navigate('/');
                setSuccess('Signup Successful!');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
                setSuccess('');
            });

        console.log("Form Submitted:", { name, photoUrl, email, password });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                setUser(result.user);
                navigate('/');
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block text-sm font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="url"
                            id="photoUrl"
                            name="photoUrl"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your password"
                            required
                        />
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
