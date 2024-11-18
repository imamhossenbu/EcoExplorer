import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/cards.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-28">
                <h2 className="text-3xl font-extrabold text-gray-800 animate__animated animate__backInLeft animate__delay-1s">
                    Discover Our Eco-Friendly Adventures
                </h2>
                <p className="mt-2 text-lg text-gray-600 px-3">
                    Explore a range of sustainable adventure experiences designed for nature enthusiasts.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="w-11/12 mx-auto">
                <div className="w-full mx-auto grid gap-8 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        cards.map((card) => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;
