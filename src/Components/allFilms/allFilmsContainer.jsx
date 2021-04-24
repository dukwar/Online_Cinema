import React, {useEffect, useState} from "react";
import AllFilms from "./allFilms";
import {connect} from "react-redux";
import {addFilmsAC, isFetchingAC, setFilter} from "../../Redux/ActionCreators";
import axios from "axios";
import Preloader from "../../helpersSCSS/Preloader/Preloader";


function AllFilmsContainer(props) {

    // set params for request
    let [page, setPage] = useState(1)

    let [queryParams, setParams] = useState({
        baseUrl: 'https://api.kinopoisk.cloud',
        message: 'message'
    })

    const {baseUrl, message} = queryParams
    const {filter} = props

    // set params for active arrow pagination
    const [active, setActive] = useState(true)
    const handleActiveClick = () => {
        setActive(true)
    }
    const handleDeactiveClick = () => {
        setActive(false)
    }


    // request
    useEffect(() => {
        props.isFetchingAC(true)
        axios.get(`${baseUrl}/${filter}/all/page/${page}/token/5d1a70fffb0fa08c373285cd69378048`)
            .then(response => response.data)
            .then(response => props.addFilmsAC(response[filter]))
            .catch((response) => console.log(response[message]))

        setTimeout(() => {
            props.isFetchingAC(false)
        }, 1000)


    }, [filter, page])


    // set activePage
    const handleSetPage = ({target}) => {
        const pageTo = target.getAttribute('data-name');
        // let { page } = queryParams;
        debugger

        if (!isNaN(pageTo)) {
            setPage(Number(pageTo))
        } else {
            switch (pageTo) {
                case 'next':
                    setPage(page + 1)
                    break
                case 'prev':
                    setPage(page - 1)
                    break

                default:
                    return null
            }
        }
    }


    return (
        <>
            <AllFilms films={props.films}
                      isFetching={props.isFetching}
                      setPage={handleSetPage}
                      page={page}
                      active={active}
                      handleActiveClick={handleActiveClick}
                      handleDeactiveClick={handleDeactiveClick}
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