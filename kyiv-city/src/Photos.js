import photo1 from "./1.jpg";
import photo2 from "./2.jpg";

export default function Photos() {
    return (
        <div>
            <h1>Світлини</h1>
            <img src={photo1}></img>
            <img src={photo2}></img>
        </div>
    );
}
