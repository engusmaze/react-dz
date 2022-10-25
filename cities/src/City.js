import "./City.css";

function City({ name, population, description }) {
    return (
        <div className="City">
            <h1>{name}</h1>
            <p>Населення: {population} осіб</p>
            <p>{description}</p>
        </div>
    );
}

export default City;
