import cl from './header.module.scss'
import NavbarGroup from "../Navbar/navbar";
import NavbarItem from "../Navbar/Navbar__Item";
import Navbar__Item from "../Navbar/Navbar__Item";
import Dropdown from "./Dropdown/Dropdown";

function Header({handleDropdownDel, handleDropdown, isDrop, handleCheck}) {
    return (

        <div className={cl.header}>

            <div className={cl.header__inner}>

                <h1 className={cl.header__logo}>Кинопоиск</h1>
                <NavbarGroup>
                    <NavbarItem onMouseLeave={handleDropdownDel} onMouseMove={handleDropdown} to={'/home'}>
                        Фильмы
                    </NavbarItem>
                    <NavbarItem to={'/timesession'}>
                        Расписание
                    </NavbarItem>
                    <NavbarItem to={'/sidebar'}>
                        Жанр
                    </NavbarItem>
                    <NavbarItem to={'#'}>
                        Новости
                    </NavbarItem>
                </NavbarGroup>
                <Navbar__Item className='navNews'>Войти</Navbar__Item>
            </div>


            {isDrop ? <Dropdown handleCheck={handleCheck}  onMouseLeave={handleDropdownDel}/>
                : null

            }

        </div>


    );
}

export default Header;
