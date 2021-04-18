import cl from './header.module.scss'
import Navbar from "../Navbar/navbar";
import Intro from "../Intro/Intro";
import NavbarGroup from "../Navbar/navbar";
import NavbarItem from "../Navbar/Navbar__Item";
import Navbar__Item from "../Navbar/Navbar__Item";
import Dropdown from "./Dropdown/Dropdown";

function Header({handleDropdownDel, handleDropdown, isDrop}) {
    return (

            <div className={cl.header}>

                <div className={cl.header__inner}>

                    <h1 className={cl.header__logo}>Киномакс</h1>
                    <NavbarGroup>
                        <NavbarItem onMouseLeave={handleDropdownDel} onMouseMove={handleDropdown} to={'/home'}>
                          Фильмы
                        </NavbarItem>
                        <NavbarItem>
                            Расписание
                        </NavbarItem>
                        <NavbarItem>
                            Жанр
                        </NavbarItem>
                        <NavbarItem>
                            Новости
                        </NavbarItem>
                    </NavbarGroup>
                     <Navbar__Item className='navNews'>Войти</Navbar__Item>
                </div>


                {isDrop ? <Dropdown onMouseLeave={handleDropdownDel} />
                    : null

                }






            </div>


    );
}

export default Header;
