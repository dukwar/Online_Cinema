import React from "react";
import cl from "./film.module.scss"
import Navbar__Item from "../../Navbar/Navbar__Item";


function Film(props) {




    return (
        <>
            <div className={cl.film}>
                <div className={cl.header}>
                    <div className={cl.header__img}>
                        <div className={cl.background}>
                            <div className={cl.film__content}>



                                <div className={cl.film__content__inner}>
                                    <div>
                                        <div className={cl.title}>
                                            <h2>Чернобыль</h2>
                                            <div className={cl.agelimit}>12+</div>
                                        </div>
                                        <p>Россия</p>
                                        <img src="https://images.kinomax.ru/films/5/5471/560x302/p_a0caf93.jpg" alt=""/>
                                    </div>

                                    <div className={cl.last__description}>

                                        <div className={cl.cols}>
                                            <div className={cl.first__decrp__col}>
                                                <p>Продолжительность:</p>
                                                <p>Жанр:</p>
                                                <p>Режиссер:</p>
                                                <p>В ролях:</p>
                                            </div>
                                            <div className={cl.second__decrp__col}>
                                                <p>2 ч. 16 мин.</p>
                                                <p>Драма, Экшн</p>
                                                <p>Данила Козловский</p>
                                                <p>Данила Козловский, Равшана Куркова, Оксана Акиньшина, Николай Козак,
                                                    Филипп
                                                    Авдеев, Игорь Черневич</p>
                                            </div>
                                        </div>
                                        <Navbar__Item className="navNews">Смотреть фильм</Navbar__Item>
                                        <div className={cl.premiere}>
                                            <div className={cl.premiere__russia}>
                                                <h6>Премьера в Киномакс</h6>
                                                <h5>15 апр. 2021 г.</h5>
                                            </div>
                                            <div className={cl.premiere__world}>
                                                <h6>Мировая премьера</h6>
                                                <h5>15 апр. 2021 г.</h5>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={cl.main__description}>
                    <p>
                        Это первый масштабный российский фильм, рассказывающий о ликвидации последствий аварии на Чернобыльской АЭС
                        и людях, которым ценой своей жизни удалось предотвратить глобальную катастрофу и превращение большей части европейского континента в гигантскую зону отчуждения и необитаемую пустыню.

                        Главный герой – пожарный Алексей, на первый взгляд, совершенно не
                        похож на Героя.
                        Отправиться вместе с ним в опасную вылазку вызвались
                        инженер Валерка и военный водолаз Борис. Времени на разработку детального
                        плана практически нет. Из-за приближения плавящейся активной зоны, вода в
                        резервуаре под реактором с каждым часом нагревается все сильнее. Группе пр
                        едстоит смертельно опасная миссия – спуститься в самое пекло и предотврати
                        ть, возможно, самый страшный исход катастрофы.
                    </p>
                </div>

                <div className={cl.trailer}>
                    <iframe width="1200" height="600" src="https://www.youtube.com/embed/sJjsCcDFKr0?start=1"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>


        </>
    );
}

export default Film;