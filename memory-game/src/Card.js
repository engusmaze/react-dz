import "./Card.css";

export default function Card({ flipped, onClick, image }) {
    return (
        <div className={`Card ${flipped ? "Flipped" : ""}`} onClick={onClick}>
            <div className="CardInner">
                <div className="Front">
                    <h2>Flip</h2>
                </div>
                <div className="Back">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
}
