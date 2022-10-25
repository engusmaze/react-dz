import "./FullName.css";

function FullName({
    name,
    surname,
    city,
    number,
    email,
    experience,
    skills,
    photo,
}) {
    return (
        <div className="FullName">
            <p>Имя: {name}</p>
            <p>Фамилия: {surname}</p>
            <p>Город: {city}</p>
            <p>Номер: {number}</p>
            <p>Эл. адрес: {email}</p>
            <p>Опыт роботы: {experience}</p>
            <p>Навыки: {skills.join(", ")}</p>
            <img src={photo} />
        </div>
    );
}

export default FullName;
