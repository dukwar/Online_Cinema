import React, {useEffect, useState} from "react";
import cl from "./allFilms.module.scss"
import Pagination from "../../helpersSCSS/Pagination/pagination";
import AllFilms from "./allFilms";
import {connect} from "react-redux";
import {addFilmsAC, isFetchingAC, setFilter} from "../../Redux/ActionCreators";
import axios from "axios";


function AllFilmsContainer(props) {

    let [page, setPage] = useState(1)

    let [queryParams, setParams ] = useState({
        baseUrl: 'https://api.kinopoisk.cloud',
        message: 'message'
    })

    const {baseUrl, message} = queryParams
    const {filter} = props




    useEffect(() => {
        props.isFetchingAC(true)
        axios.get(`${baseUrl}/${filter}/all/page/${page}/token/d93a48852f8dcb901220df17ce828046`)
            .then(response => response.data)
            .then(response => props.addFilmsAC(response[filter]))
            .catch((response) => console.log(response[message]))

        setTimeout(() => {
            props.isFetchingAC(false)
        }, 4000)


    }, [filter, page])

   const handleSetPage = ({target}) => {
       const page = +target.getAttribute('data-name');
       // let { page } = queryParams;
       debugger

        setPage(page)
   }



    return (
        <>
            <AllFilms films={props.films}
                      isFetching={props.isFetching}
                      setPage={handleSetPage}
            />

        </>



    );
}

const MapStateToProps = (state) => {
    return {
        films: state.RecentReducer.films,
        isFetching: state.RecentReducer.isFetching,
        filter: state.RecentReducer.filter
    }
}

export default connect(MapStateToProps, {addFilmsAC, isFetchingAC, setFilter})(AllFilmsContainer);