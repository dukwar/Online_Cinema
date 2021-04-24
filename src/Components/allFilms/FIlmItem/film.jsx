import React from "react";
import cl from "./film.module.scss"
import Navbar__Item from "../../Navbar/Navbar__Item";
import PropTypes from 'prop-types';


function Film({title, description, actors, age, countries, directors, duration, genres, poster, premiereRussia, premiereWorld, trailer, ratingKinopoisk}) {


    const ageF = age ? age.split('').filter(num => !isNaN(num)).join('') : 13


    return (
        <>
            <div className={cl.film}>
                <div className={cl.header}>
                    <div className={cl.header__img}>
                        <div className={cl.background}>
                            <div className={cl.film__content}>



                                <div className={cl.title}>
                                    <h2>{title}</h2>
                                    <div className={cl.agelimit}>{ageF}+</div>
                                </div>
                                <div className={cl.film__content__inner}>
                                    <div>
                                        <p>{countries && countries.map(country => country).join(', ')}</p>
                                        <div className={cl.rating}>{ratingKinopoisk}</div>


                                        <img src={poster} alt=""/>
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
                                                <p>{genres && genres.map(genre => genre).join(', ')}</p>
                                                <p>{directors && directors.map(dir => dir).join(', ')}</p>
                                                <p>{actors && actors.map(actor => actor).join(', ')}</p>
                                            </div>
                                        </div>

                                        <Navbar__Item className="navNews">Смотреть фильм</Navbar__Item>
                                        <div className={cl.premiere}>
                                            <div className={cl.premiere__russia}>
                                                <h6>Премьера в России</h6>
                                                <h5>{premiereRussia}</h5>
                                            </div>
                                            <div className={cl.premiere__world}>
                                                <h6>Мировая премьера</h6>
                                                <h5>{premiereWorld}</h5>
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
                        {description}
                    </p>
                </div>

                <div className={cl.trailer}>
                    <iframe width="1200" height="600" src={trailer}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>


        </>
    );
}

// title, description, actors, age, countries, directors, duration, genres, poster, premiereRussia, premiereWorld, trailer, ratingKinopoisk

Film.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    poster: PropTypes.string,
    premiereRussia: PropTypes.string,
    premiereWorld: PropTypes.string,
    trailer: PropTypes.string,
    ratingKinopoisk: PropTypes.string,
    actors: [],
    countries: [],
    directors: [],
    genres: [],

}

Film.defaultProps = {
    title: 'Чернобыль',
    description: 'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, но Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
        '\n' +
        'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора грозит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия которого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из резервуара и тем самым предотвратить еще один мощный взрыв.',
    actors: ['Данила Козловский, Равшана Куркова, Оксана Акиньшина, Николай Козак, Филипп Авдеев, Игорь Черневич'],
    countries: ['Россия'],
    directors: ['Данила Козловский'],
    genres: ['Драма', 'Экшен'],
    poster: 'https://images.kinomax.ru/films/5/5471/560x302/p_a0caf93.jpg',
    premiereRussia: '15 апр. 2021 г.',
    premiereWorld: '15 апр. 2021 г.',
    trailer: 'https://www.youtube.com/embed/sJjsCcDFKr0',
    ratingKinopoisk: '5.8'








}

export default Film;