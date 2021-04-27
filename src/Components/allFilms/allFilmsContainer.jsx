import React, {useEffect, useState} from "react";
import AllFilms from "./allFilms";
import {connect} from "react-redux";
import {addFilmsAC, isFetchingAC, setFilter} from "../../Redux/ActionCreators";
import axios from "axios";
import Sidebar from "../../helpersSCSS/SideBar/sidebar";
import Footer from "../Footer/footer";
import PropTypes from "prop-types";



function AllFilmsContainer({films, isFetching, filter, addFilmsAC, isFetchingAC, setFilter}) {

    // set params for request
    let [page, setPage] = useState(1)

    let [queryParams, setParams] = useState({
        baseUrl: 'https://api.kinopoisk.cloud',
        message: 'message'
    })

    const {baseUrl, message} = queryParams


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
        isFetchingAC(true)
        axios.get(`${baseUrl}/${filter}/all/page/${page}/token/5d1a70fffb0fa08c373285cd69378048`)
            .then(response => response.data)
            .then(response => addFilmsAC(response[filter]))
            .catch((response) => console.log(response[message]))

        setTimeout(() => {
            isFetchingAC(false)
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
            <Sidebar />
            <AllFilms films={films}
                      isFetching={isFetching}
                      setPage={handleSetPage}
                      page={page}
                      active={active}
                      handleActiveClick={handleActiveClick}
                      handleDeactiveClick={handleDeactiveClick}
            />
            <Footer />

        </>


    );
}

AllFilmsContainer.propTypes = {
    films: [],
    isFetching: PropTypes.bool,
    filter: PropTypes.string
}

const MapStateToProps = (state) => {
    return {
        films: state.RecentReducer.films,
        isFetching: state.RecentReducer.isFetching,
        filter: state.RecentReducer.filter
    }
}

export default connect(MapStateToProps, {addFilmsAC, isFetchingAC, setFilter})(AllFilmsContainer);