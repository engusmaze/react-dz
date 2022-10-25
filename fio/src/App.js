import "./App.css";
import FullName from "./FullName";

import photo from "./photo.jpg";

function App() {
    return (
        <div className="App">
            <FullName
                name="Михаил"
                surname="Поплавский"
                city="Киев"
                number="+380679644484"
                email="donotmailmeever@gmail.com"
                experience="2 года"
                skills={[
                    "HTML",
                    "CSS",
                    "Javascript",
                    "JSON",
                    "Vim",
                    "Typescript",
                    "React",
                    "next.js",
                    "Angular",
                    "Solid",
                    "Svelte",
                    "Vue",
                    "three.js",
                    "express.js",
                    "Node.js",
                    "Python",
                    "Rust",
                    "C++",
                    "C",
                    "C#",
                    "Java",
                    "GO",
                    "Не умею чинить принтеры",
                ]}
                photo={photo}
            />
        </div>
    );
}

export default App;
