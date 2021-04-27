import React from "react";
import cl from "./allFilmsItem.module.scss"
import Navbar__Item from "../../Navbar/Navbar__Item";
import PropTypes from "prop-types";




function AllFilmsItem({id, title, country, director, genres, poster, year, age, description}) {

    // filtering age to find a numeric value
    const ageNum = age && age.split('').filter(age => !isNaN(age)).join('')

    return (
        <>
            <div className={cl.film}>
                <div className={cl.film__img}>
                    <Navbar__Item className={'navFilm'} to={`/film/${id}`}>
                        <img src={poster} alt=""/>
                    </Navbar__Item>

                    <div className={cl.film__img__description}>
                        <div>
                            {genres && genres.map(genre => {
                                return <div className={cl.genre}>{genre}</div>
                            })}

                            <time>2ч. 16 мин.</time>
                        </div>
                        {age ? <div className={cl.agelimit}>{ageNum}+</div> : null}

                    </div>
                </div>

                <div className={cl.film__description}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={cl.last__description}>
                        <div className={cl.first__decrp__col}>
                            <p>Год производства:</p>
                            <p>Страна:</p>
                            <p>Режиссер:</p>
                        </div>
                        <div className={cl.second__decrp__col}>
                            <p>{year}</p>
                            {country && country.map(country => {
                                return <p>{country}</p>
                            })}
                            {director && director.map(dir => {
                                return <p>{dir}</p>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

AllFilmsItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    country: [],
    director: [],
    genres: [],
    poster: PropTypes.string,
    year: PropTypes.string,
    age: PropTypes.string,
    description: PropTypes.string
}

export default AllFilmsItem;