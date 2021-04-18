import cl from './header.module.scss'
import Navbar from "../Navbar/navbar";
import Intro from "../Intro/Intro";
import NavbarGroup from "../Navbar/navbar";
import NavbarItem from "../Navbar/Navbar__Item";

function Header() {
    return (

            <div className={cl.header}>
                <div className={cl.header__inner}>
                    <h1 className={cl.header__logo}>Киномакс</h1>
                    <NavbarGroup>
                        <NavbarItem to={'/home'}>
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

                </div>
            </div>


    );
}

export default Header;
