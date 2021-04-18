import React from "react";
import cl from './footer.module.scss'
import NavbarGroup from "../Navbar/navbar";
import Navbar__Item from "../Navbar/Navbar__Item";
import {FacebookFooter, GoogleFooter, LinkedInFooter, TwitterFooter} from "../../helpersSCSS/imgFiles";


function Footer() {


    return (
        <>
            <div className={cl.footer}>
                <div className={cl.footer__inner}>
                    <div className= {cl.social}>
                        <TwitterFooter />
                        <FacebookFooter />
                        <LinkedInFooter />
                        <GoogleFooter />


                    </div>

                    <NavbarGroup>
                        <Navbar__Item>
                            Вакансии
                        </Navbar__Item>

                        <Navbar__Item>
                            Реклама
                        </Navbar__Item>

                        <Navbar__Item>
                            Соглашение
                        </Navbar__Item>

                        <Navbar__Item>
                            Справка
                        </Navbar__Item>

                        <Navbar__Item>
                            Предложения
                        </Navbar__Item>
                    </NavbarGroup>
                </div>

                <div className={cl.footer__info}>
                    <div className={cl.regals__col_1}>
                        © 2003 – 2021,КиноПоиск18+
                    </div>
                    <div className={cl.regals__col_2}>
                        <p>Телепрограмма</p>
                        <p>Музыка</p>
                        <p>Афиша</p>
                    </div>
                    <div className={cl.regals__col_3}>
                        <p>Проект Клопова Д. А. :)</p>
                    </div>
                </div>




            </div>




        </>



    );
}

export default Footer;
