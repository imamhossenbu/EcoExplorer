const Testimonial = ({ data }) => {
    const { name, location, message } = data;

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 m-4 transform transition duration-500 hover:scale-105">
                <h1 className="text-xl font-bold text-gray-800 mb-4">What Our Customers Say</h1>
                <p className="text-gray-700 italic mb-6">"{message}"</p>
                <div className="border-t border-gray-300 pt-4">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-500">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
