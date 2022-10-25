import "./FullName.css";

function FullName({name, surname, number, email}) {
    return (
        <div className="FullName">
            <p>Имя: {name}</p>
            <p>Фамилия: {surname}</p>
            <p>Номер: {number}</p>
            <p>Эл. адрес: {email}</p>
        </div>
    );
}

export default FullName;
