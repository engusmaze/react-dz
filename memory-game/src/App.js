import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CardsGrid from "./CardsGrid";

export default function App() {
    const [gameGrid, setGameGrid] = useState();
    const [scoreInfo, setScoreInfo] = useState();

    function startGame(columns, rows) {
        setGameGrid(
            <CardsGrid
                columns={columns}
                rows={rows}
                onGameEnded={(tries, timeMS) => {
                    let score = tries;
                    let bestScore = Math.min(
                        score,
                        scoreInfo?.bestScore !== undefined
                            ? scoreInfo.bestScore
                            : Infinity
                    );
                    let time = Math.ceil((Date.now() - timeMS) / 1000);
                    let bestTime = Math.min(
                        time,
                        scoreInfo?.bestTime !== undefined
                            ? scoreInfo.bestTime
                            : Infinity
                    );
                    setScoreInfo({ score, bestScore, time, bestTime });
                    setGameGrid();
                }}
            />
        );
    }

    return (
        <div className="App">
            <h1>Memory game</h1>
            {gameGrid ? (
                gameGrid
            ) : (
                <div className="Buttons">
                    <button
                        onClick={() => {
                            startGame(4, 3);
                        }}
                    >
                        Play 4x3
                    </button>
                    <button
                        onClick={() => {
                            startGame(5, 4);
                        }}
                    >
                        Play 5x4
                    </button>
                </div>
            )}
            {scoreInfo && (
                <div>
                    <h2>Score: {scoreInfo.score}</h2>
                    <h2>Time: {scoreInfo.time}s</h2>
                    <h2>Best score: {scoreInfo.bestScore}</h2>
                    <h2>Best time: {scoreInfo.bestTime}s</h2>
                </div>
            )}
        </div>
    );
}
