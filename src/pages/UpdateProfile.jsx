import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UpdateProfile = () => {
    const { user, manageProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const handleUpdate =(e) => {
        e.preventDefault();
        manageProfile(name,photoURL)
        .then((res)=>{
            navigate('/profile');
        })
    };


return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
          <Helmet>
                <title>Update Profile | EcoExplorer.</title>
            </Helmet>
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="photoURL" className="block text-sm font-semibold text-gray-700">Photo URL</label>
                    <input
                        type="url"
                        id="photoURL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Enter photo URL"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Update Information
                </button>
            </form>
        </div>
    </div>
);
}

export default UpdateProfile;
