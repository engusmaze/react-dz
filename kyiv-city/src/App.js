import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Sightseeing from "./Sightseeing";
import Photos from "./Photos";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="Routes">
                    <Link to="/">Головна</Link>
                    <Link to="/about">Опис</Link>
                    <Link to="/sightseeing">Пам'ятки</Link>
                    <Link to="/photos">Світлини</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sightseeing" element={<Sightseeing />} />
                    <Route path="/photos" element={<Photos />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
