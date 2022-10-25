function ColorButton({ color, colorChange }) {
    return (
        <button
            className="ColorButton"
            style={{ backgroundColor: color }}
            onClick={() => {
                colorChange(color);
            }}
        >
            {color}
        </button>
    );
}

export default ColorButton;
