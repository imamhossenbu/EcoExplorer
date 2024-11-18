const Testimonial = ({ data }) => {
    const { name, location, message } = data;

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 m-4 transform transition duration-500 hover:scale-105">
            <div className="flex items-center space-x-4 mb-6">
                <img
                    src={`https://i.pravatar.cc/150?u=${name}`} 
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-500">{location}</p>
                </div>
            </div>
            <p className="text-gray-700 italic mb-6">"{message}"</p>
            <div className="border-t border-gray-300 pt-4">
                <p className="text-gray-500 text-sm">- Testimonial</p>
            </div>
        </div>
    );
};

export default Testimonial;
