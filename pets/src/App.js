import "./App.css";
import Pet from "./Pet";

import hamster from "./hamster.jpg";

function App() {
    return (
        <div className="App">
            <Pet type="Хомяк" name="Борис" age="3 месяца" photo={hamster} />
        </div>
    );
}

export default App;
