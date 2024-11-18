import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { setUser, login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        login(email, password)
            .then((result) => {
                setUser(result.user);
                navigate('/');
            })
            .catch((error) => setError(error.message));
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
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
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

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-gray-700">Remember me</span>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
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
                    <a href="/signup" className="text-sm text-blue-600 hover:text-blue-800">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
