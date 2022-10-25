import { useState } from "react";
import "./App.css";
import ColorButton from "./ColorButton";

function App() {
    const [color, setColor] = useState("red");

    return (
        <div className="App">
            <ColorButton color="red" colorChange={setColor} />
            <ColorButton color="green" colorChange={setColor} />
            <ColorButton color="yellow" colorChange={setColor} />
            <p className="ColoredText" style={{ backgroundColor: color }}>
                Не волнуйтесь, если что-то не работает. Если бы всё работало,
                вас бы уволили.
            </p>
        </div>
    );
}

export default App;
