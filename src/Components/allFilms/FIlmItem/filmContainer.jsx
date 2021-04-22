import React, {useEffect, useState} from "react";
import Film from "./film";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {isFetchingAC, addFilmAC} from "../../../Redux/ActionCreators";
import axios from "axios";


function FilmContainer({film, match, filter, isFetchingAC, addFilmAC}) {

    let id = match.params.id


    let [queryParams, setParams] = useState({
        baseUrl: 'https://api.kinopoisk.cloud',
        message: 'message'
    })

    const {baseUrl, message} = queryParams


    // request
    useEffect(() => {
        // isFetchingAC(true)
        // axios.get(`${baseUrl}/${filter}/all/page/${page}/token/d93a48852f8dcb901220df17ce828046`)
        //     .then(response => response.data)
        //     .then(response => addFilmAC(response[filter]))
        //     .catch((response) => console.log(response[message]))
        //
        // setTimeout(() => {
        //     isFetchingAC(false)
        // }, 1000)


    }, [filter])



    return (
        <>
            <Film film={film} />





        </>
    );
}

const MapStateToProps = (state) => {
    return {
        film: state.FilmReducer.film,
        filter: state.RecentReducer.filter

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

