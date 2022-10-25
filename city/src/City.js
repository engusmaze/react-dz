function City({ name, description, images }) {
    let imageComponents = [];
    for (const image of images) {
        imageComponents.push(<img src={image} />);
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            {imageComponents}
        </div>
    );
}

export default City;
