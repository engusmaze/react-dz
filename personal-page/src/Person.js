import { useState } from "react";
import "./Person.css";

function Person() {
    const [name, setName] = useState("Михаил");
    const [surname, setSurname] = useState("Поплавский");
    const [email, setEmail] = useState("example@gmail.com");
    const [number, setNumber] = useState("+380468135648");
    function reset() {
        setName("Михаил");
        setSurname("Поплавский");
        setEmail("example@gmail.com");
        setNumber("+380468135648");
    }
    return (
        <div className="Person">
            <button onClick={reset}>Reset</button>
            <p>Name: </p>
            <input
                type="text"
                className="Input"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            ></input>
            <p>Surname: </p>
            <input
                type="text"
                className="Input"
                value={surname}
                onChange={(e) => {
                    setSurname(e.target.value);
                }}
            ></input>
            <p>Email: </p>
            <input
                type="text"
                className="Input"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            ></input>
            <p>Number: </p>
            <input
                type="text"
                className="Input"
                value={number}
                onChange={(e) => {
                    setNumber(e.target.value);
                }}
            ></input>
        </div>
    );
}

export default Person;
