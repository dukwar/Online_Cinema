import React from "react";
import cl from "./allFilms.module.scss"
import Pagination from "../../helpersSCSS/Pagination/pagination";
import AllFilmsItem from "./allFilmsItem/allFilmsItem";


function AllFilms(props) {




    return (
        <>
            <div className={cl.timesession}>
                <div className={cl.header}>
                    <div className={cl.header__img}>
                        <div className={cl.background}>
                            <div>
                                <p>3D 2D</p>
                                <h1>Все фильмы онлайн </h1>
                                <h6>пр. Ленина, д. 29</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cl.pagination}>

                    <Pagination setPage={props.setPage}/>
                </div>
                <div className={cl.timesession__data}>
                    {
                        props.films.map(film => {
                          return <AllFilmsItem
                              title={film.title}
                              country={film.countries}
                              poster={film.poster}
                              director={film.directors}
                              genres={film.genres}
                              year={film.year}
                              age={film.age}
                              description={film.description}
                              isFetching={props.isFetching}

                          />
                        })

                    }

                </div>
                <div className={cl.coming__soon}></div>

            </div>


        </>



    );
}

export default AllFilms;