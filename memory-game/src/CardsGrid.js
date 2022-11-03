import { useEffect, useState } from "react";
import Card from "./Card";
import "./CardsGrid.css";

const animals = [
    require("./animals/bear.jpg"),
    require("./animals/cobra.jpg"),
    require("./animals/dolphin.jpg"),
    require("./animals/duck.jpg"),
    require("./animals/elephant.jpg"),
    require("./animals/giraffe.jpg"),
    require("./animals/penguin.jpg"),
    require("./animals/tiger.jpg"),
    require("./animals/zebra.jpg"),
    require("./animals/worm.jpg"),
];

export default function CardsGrid({ columns, rows, onGameEnded }) {
    const [selectedCards, setSelectedCards] = useState([]);
    const [cardImages, setCardValues] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [tries, setTries] = useState(0);
    const [gameStartTime, setGameStartTime] = useState(Date.now());

    useEffect(() => {
        let cardAmount = (columns * rows) / 2;

        let randomAnimals = [...animals];
        randomAnimals.sort(() => Math.random() - 0.5);

        let cards = [];
        for (let i = 0; i < cardAmount; i++) {
            let animal = randomAnimals[i];
            cards.push(animal);
            cards.push(animal);
        }
        cards.sort(() => Math.random() - 0.5);

        setCardValues(cards);
        setFlippedCards(cards.map((i) => false));
    }, []);

    useEffect(() => {
        if (selectedCards.length === 2) {
            setTries(tries + 1);
            setTimeout(() => {
                setSelectedCards([]);
                if (
                    cardImages[selectedCards[0]] !==
                    cardImages[selectedCards[1]]
                ) {
                    const flippedCardsNew = [...flippedCards];
                    for (const selected of selectedCards) {
                        flippedCardsNew[selected] = false;
                    }
                    setFlippedCards(flippedCardsNew);
                } else {
                    for (const flipped of flippedCards) {
                        if (flipped === false) {
                            return;
                        }
                    }
                    onGameEnded(tries, gameStartTime);
                }
            }, 400);
        }
    }, [selectedCards]);

    return (
        <div
            className="CardsGrid"
            style={{
                aspectRatio: `${columns} / ${rows}`,
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
        >
            {flippedCards.map((flipped, i) => (
                <Card
                    key={i}
                    flipped={flipped}
                    onClick={() => {
                        if (!flippedCards[i] && selectedCards.length < 2) {
                            const flippedCardsNew = [...flippedCards];
                            flippedCardsNew[i] = true;

                            setSelectedCards([...selectedCards, i]);
                            setFlippedCards(flippedCardsNew);
                        }
                    }}
                    image={cardImages[i]}
                ></Card>
            ))}
        </div>
    );
}
