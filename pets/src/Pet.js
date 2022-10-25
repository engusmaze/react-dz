import "./Pet.css";

function Pet({ type, name, age, photo }) {
    return (
        <div className="Pet">
            <h3>{type}</h3>
            <h2>{name}</h2>
            <h4>Возраст: {age}</h4>
            <img src={photo} />
        </div>
    );
}

export default Pet;
