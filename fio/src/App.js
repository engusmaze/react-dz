import "./App.css";
import FullName from "./FullName";

function App() {
    return (
        <div className="App">
            <FullName
                name="Михаил"
                surname="Поплавский"
                number="+380679644484"
                email="donotmailmeever@gmail.com"
            />
        </div>
    );
}

export default App;
