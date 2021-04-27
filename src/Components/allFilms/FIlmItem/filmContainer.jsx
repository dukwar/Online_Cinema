import React, {useEffect, useState} from "react";
import Film from "./film";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {isFetchingAC, addFilmAC} from "../../../Redux/ActionCreators";
import axios from "axios";
import Preloader from "../../../helpersSCSS/Preloader/Preloader";
import Sidebar from "../../../helpersSCSS/SideBar/sidebar";
import Footer from "../../Footer/footer";
import PropTypes from "prop-types";


function FilmContainer({film, match, filter, isFetching, isFetchingAC, addFilmAC}) {

    let id = match.params.id


    let [queryParams, setParams] = useState({
        baseUrl: 'https://api.kinopoisk.cloud',
        message: 'message'
    })

    const {baseUrl, message} = queryParams


    // request
    useEffect(() => {
        isFetchingAC(true)
        axios.get(`${baseUrl}/${filter}/${id}/token/5d1a70fffb0fa08c373285cd69378048`)
            .then(response => response.data)
            .then(response => addFilmAC(response))
            .catch((response) => console.log(response[message]))

        setTimeout(() => {
            isFetchingAC(false)
        }, 2000)


    }, [])

    if (isFetching) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }


    return (
        <>
            <Sidebar/>
            <Film title={film.title}
                  description={film.description}
                  trailer={film.trailer}
                  actors={film.actors}
                  countries={film.countries}
                  genres={film.genres}
                  directors={film.directors}
                  age={film.age}
                  premiereWorld={film.premiere_world}
                  premiereRussia={film.premiere_russia}
                  poster={film.poster}
                  year={film.year}
                  duration={film.duration}
                  ratingKinopoisk={film.rating_kinopoisk}

            />
            <Footer/>


        </>
    );
}

FilmContainer.propTypes = {
    film: {},
    match: {},
    filter: PropTypes.string,
    isFetching: PropTypes.bool,
    isFetchingAC:  PropTypes.func,
    addFilmAC:  PropTypes.func

}

const MapStateToProps = (state) => {
    return {
        film: state.FilmReducer.film,
        filter: state.RecentReducer.filter,
        isFetching: state.RecentReducer.isFetching

    }
}

export default compose(
    connect(
        MapStateToProps,
        {
            isFetchingAC,
            addFilmAC,

        }),
    withRouter,
)(FilmContainer)

