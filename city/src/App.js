import "./App.css";
import City from "./City";

import city1 from "./city1.jpg";
import city2 from "./city2.jpg";

function App() {
    return (
        <div className="App">
            <City
                name="Київ"
                description="Київ — столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України."
                images={[city1, city2]}
            />
        </div>
    );
}

export default App;
