import React from "react";
import cl from "./allFilmsItem.module.scss"
import Preloader from "../../../helpersSCSS/Preloader/Preloader";



function AllFilmsItem({title, country, director, genres, poster, year, age, description, isFetching}) {

    if (isFetching) {
        return <Preloader/>
    }



    return (
        <>
            <div className={cl.film}>
                <div className={cl.film__img}>
                    <img src={poster} alt=""/>
                    <div className={cl.film__img__description}>
                        <div>
                            {genres && genres.map(genre => {
                               return <div className={cl.genre}>{genre}</div>
                            })}

                            <time>2ч. 16 мин.</time>
                        </div>
                        {age ? <div className={cl.agelimit}>{age.split('').filter(age => !isNaN(age)).join('')}+</div>  : null}

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

export default AllFilmsItem;