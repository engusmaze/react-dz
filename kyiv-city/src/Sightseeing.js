import lavra from "./lavra.jpg";
import vorota from "./vorota.jpg";

export default function Sightseeing() {
    return (
        <div>
            <h1>Пам'ятки</h1>
            <h2>Києво-Печерська Лавра</h2>
            <img src={lavra} />
            <p>
                Особливе місце в історії міста займає всесвітньовідома
                Києво-Печерська Лавра - перший християнський монастир на Русі.
                Кожна віруюча людина вважає своїм обов'язком хоча б раз у своєму
                житті відвідати це святе для християн місце. У його древніх
                печерах зберігається безліч святих мощей. А приголомшливий
                архітектурний ансамбль Лаври, виконаний у стилі «українського
                бароко», не залишає байдужим його відвідувачів і прочан.
            </p>
            <h2>Золоті Ворота</h2>
            <img src={vorota} />
            <p>
                Якщо пройтися по вулиці Володимирській, яка бере початок від
                Софійської площі, то можна потрапити до одного з найдавніших
                входів у місто Київ - Золотих Воріт. Це один з чотирьох входів у
                місто, який зберігся до наших часів. Оборонну споруду було
                зведено за правління Ярослава Мудрого.
            </p>
        </div>
    );
}