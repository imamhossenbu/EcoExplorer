import { FaLeaf, FaHiking, FaGlobe, FaUmbrellaBeach } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            icon: <FaLeaf className="text-green-500 text-4xl mb-4" />,
            title: "Eco-Friendly Adventures",
            description: "Join us on sustainable adventures designed to protect and preserve our planet's beauty."
        },
        {
            icon: <FaHiking className="text-blue-500 text-4xl mb-4" />,
            title: "Guided Hiking Tours",
            description: "Experience breathtaking views and unique trails with our expert-guided hiking tours."
        },
        {
            icon: <FaGlobe className="text-yellow-500 text-4xl mb-4" />,
            title: "Global Destinations",
            description: "Explore top eco-friendly destinations around the world for unforgettable experiences."
        },
        {
            icon: <FaUmbrellaBeach className="text-purple-500 text-4xl mb-4" />,
            title: "Beach Adventures",
            description: "Enjoy relaxing beach adventures and sustainable coastal experiences."
        }
    ];

    return (
        <div className="my-20 w-11/12 mx-auto">
            <h2 className="text-center text-3xl font-bold py-6">Our Services</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
                Discover the range of eco-adventures and unique experiences we offer. Whether you love mountains, beaches, or global travel, we have something for every nature lover.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                        {service.icon}
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
