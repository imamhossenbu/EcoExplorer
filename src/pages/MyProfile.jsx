import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <Helmet>
                <title>My Profile | EcoExplorer.</title>
            </Helmet>
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome, {user.displayName || "User"}!</h2>
                    <p className="text-sm text-gray-500 mt-2">Here’s your profile information</p>
                </div>

                <div className="mt-6 flex flex-col items-center">
                    <img
                        src={user.photoURL || "https://via.placeholder.com/150"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full border-2 border-blue-600 object-cover shadow-lg"
                    />
                    
                    <div className="mt-4 text-center space-y-2">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Name</h3>
                            <p className="text-sm text-gray-600">{user.displayName || "N/A"}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                            <p className="text-sm text-gray-600">{user.email || "N/A"}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/update-profile')}
                        className="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
