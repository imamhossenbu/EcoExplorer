import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = useLoaderData();
    const {
        adventureTitle,
        image,
        categoryName,
        shortDescription,
        adventureCost,
        bookingAvailability,
        location,
        duration,
        adventureLevel,
        includedItems,
        ecoFriendlyFeatures,
        maxGroupSize,
        specialInstructions
    } = data;

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 10 && currentHour < 20) {
            window.open('https://meet.google.com/', '_blank');
        } else {
            setIsModalOpen(true);
        }
    };

    // Close modal function
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="py-10 px-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-20">
            {/* Title and Image */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">{adventureTitle}</h1>
                <h3 className="text-xl font-semibold text-gray-600 mt-2">{categoryName}</h3>
                <img
                    src={image}
                    alt={adventureTitle}
                    className="mt-6 w-full h-72 object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Adventure Details */}
            <div className="mt-8 space-y-6">
                <p className="text-lg text-gray-700">{shortDescription}</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                        <span className="text-gray-500">Cost:</span>
                        <span className="font-semibold text-gray-800">{adventureCost}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Booking Availability:</span>
                        <span className="font-semibold text-gray-800">{bookingAvailability}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-semibold text-gray-800">{location}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-semibold text-gray-800">{duration}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Adventure Level:</span>
                        <span className="font-semibold text-gray-800">{adventureLevel}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Max Group Size:</span>
                        <span className="font-semibold text-gray-800">{maxGroupSize}</span>
                    </div>
                </div>

                {/* Included Items */}
                <div>
                    <h4 className="text-xl font-semibold text-gray-800">Included Items:</h4>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        {includedItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Eco-Friendly Features */}
                <div>
                    <h4 className="text-xl font-semibold text-green-600">Eco-Friendly Features:</h4>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        {ecoFriendlyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* Special Instructions */}
                <div>
                    <h4 className="text-xl font-semibold text-gray-800">Special Instructions:</h4>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        {specialInstructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Talk with Expert Button */}
            <div className="mt-10 text-center">
                <button onClick={handleTalkWithExpert} className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition">
                    Talk with Expert
                </button>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                        <h2 className="text-2xl font-bold mb-4">Consultation Time</h2>
                        <p className="text-gray-700 mb-6">Our experts are available from 10:00 AM to 8:00 PM. Please contact us during these hours.</p>
                        <button
                            onClick={closeModal}
                            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardDetails;
