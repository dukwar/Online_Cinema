import React from "react";
import cl from "./allFilms.module.scss"
import Pagination from "../../helpersSCSS/Pagination/pagination";
import AllFilmsItem from "./allFilmsItem/allFilmsItem";
import Preloader from "../../helpersSCSS/Preloader/Preloader";
import Navbar__Item from "../Navbar/Navbar__Item";


function AllFilms({setPage, films, page, isFetching, active, handleActiveClick, handleDeactiveClick}) {


    if (isFetching) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }


    return (
        <>
            <div className={cl.timesession}>
                <div className={cl.header}>
                    <div className={cl.header__img}>
                        <div className={cl.background}>
                            <div>
                                <p>3D 2D</p>
                                <h1>Все фильмы и сериалы онлайн </h1>
                                <Navbar__Item className='navNews'>Купить подписку</Navbar__Item>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cl.timesession__data}>
                    {
                        films.map(film => {
                            return <AllFilmsItem
                                id={film.id_kinopoisk}
                                title={film.title}
                                country={film.countries}
                                poster={film.poster}
                                director={film.directors}
                                genres={film.genres}
                                year={film.year}
                                age={film.age}
                                description={film.description}
                                isFetching={isFetching}

                            />
                        })

                    }

                </div>
                <div className={cl.pagination}>
                    <Pagination setPage={setPage}
                                page={page}
                                active={active}
                                setActive={handleActiveClick}
                                delActive={handleDeactiveClick}
                    />
                </div>
                <div className={cl.coming__soon}></div>
            </div>


        </>


    );
}

export default AllFilms;