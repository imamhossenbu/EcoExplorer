import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
    const location = useLocation();
    const email = location.state?.email || '';  // Getting the email from location state

    const handleResetPassword = () => {
        // Redirect to Gmail to reset password
        window.open('https://mail.google.com/', '_blank');
    };
    console.log(email,location);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
            <Helmet>
                <title>Forgot | EcoExplorer</title>
            </Helmet>
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}  // Set the email value
                            readOnly
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button
                        onClick={handleResetPassword}
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
