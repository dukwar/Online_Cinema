import cl from "./Dropdown.module.scss"
import {useRef} from "react";

function Dropdown({onMouseLeave, handleCheck}) {

    const menuRef = useRef()

    return (

        <div ref={menuRef} onMouseLeave={onMouseLeave} className={cl.dropdown}>
            <div className={cl.dropdown__inner}>
                <div className={cl.dropdown__col}>
                    <h4>Фильмы в прокате</h4>

                    <div>
                        <p>Чернобыль</p>
                        <p>Мортал Комбат</p>
                        <p>От винта 2</p>
                        <p>Властелин Колец: Братство Кольца</p>
                        <p>100% Волк</p>
                    </div>

                    <p>Все фильмы</p>


                </div>
                <div className={cl.dropdown__col}></div>
                <div className={cl.dropdown__col}>
                    <h4>Скоро в прокате</h4>
                    <div>
                        <p>Форсаж 9</p>
                        <p>Властелин Колец: Две крепости</p>
                        <p>Властелин Колец: Возвращение Короля</p>
                        <p>Гнев Человеческий</p>
                    </div>

                    <p>Все новинки</p>
                </div>
            </div>
        </div>

    )
}

export default Dropdown;