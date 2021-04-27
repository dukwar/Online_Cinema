import React, {Fragment} from "react";
import "./Recent.scss"
import NavbarGroup from "../Navbar/navbar";
import Navbar__Item from "../Navbar/Navbar__Item";
import FilmItem from "./Recent__Item/film__item";
import SliderBlock from "./SliderBlock/SliderBlock";
import Preloader from "../../helpersSCSS/Preloader/Preloader";
import News from "../News/news";
import Slider from "../../helpersSCSS/Slider";

function Recent(props) {

console.log('Recent')

    if (props.isFetching) {
        return (
            <div className='preloader'>
                <Preloader/>
            </div>

        )
    }

    return (
        <>
            <div className='main'>
                <Slider size={200}/>
                <div className={'nav__recent'}>
                    <NavbarGroup>
                        <Navbar__Item onClick={props.handleSetFilter} filter={'movies'} navBetween>
                            Кино
                        </Navbar__Item>
                        <Navbar__Item onClick={props.handleSetFilter} filter={'tv-series'} navBetween>
                            Сериалы
                        </Navbar__Item>
                    </NavbarGroup>
                </div>

                <div className={'recent__main'}>
                    <div className={'recent__trailer'}>

                        <div className={'recent__trailer__video'}>
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/YLw55x-zOSo"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={'recent__trailer__info'}>
                            <h3 className={'trailer__name'}>Гнев Человеческий</h3>

                            <div className={'trailer__data'}>
                                <div className="trailer__data__inner">
                                    <h6>Сюжет : </h6>
                                    <p>Эйч — загадочный и холодный на вид джентльмен, но внутри него пылает жажда
                                        справедливости.
                                        Преследуя свои мотивы, он внедряется в инкассаторскую компанию, чтобы выйти на
                                        соучастников серии многомиллионных ограблений, потрясших Лос-Анджелес.
                                        В этой запутанной игре у каждого своя роль, но под подозрением оказываются все.
                                        Виновных же обязательно постигнет гнев человеческий.</p>
                                </div>
                                <div className="trailer__data__inner">
                                    <h6>Дата выхода :</h6>
                                    <p>Апрель 29, 2021</p>
                                </div>

                                <div className="trailer__data__inner">
                                    <h6>Жанр :</h6>
                                    <p>Боевик | Триллер | Семья</p>
                                </div>

                                <div className="trailer__data__inner">
                                    <h6>Рейтинг :</h6>
                                    <p>8 / 10</p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className={'recent__films'}>
                        {props.films.map(film => {
                            return <FilmItem filmImage={film.poster} filmTitle={film.title}/>
                        })}
                    </div>
                </div>
                <SliderBlock/>
            </div>

            <News />
        </>

    );
}

export default Recent;