

const Card = ({ card }) => {
    const { adventureTitle, image, ecoFriendlyFeatures } = card;
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105  bg-white">
            <img src={image} alt={adventureTitle} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{adventureTitle}</h3>
                <ul className="space-y-1 text-green-600 mb-4 list-disc list-inside text-left">
                    {ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className="w-full py-2 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Card;