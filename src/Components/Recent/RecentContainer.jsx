import React, {Fragment, useEffect, useState} from "react";
import Recent from "./Recent";
import {connect} from "react-redux";
import axios from "axios";
import {addFilmsAC, isFetchingAC, setFilter} from "../../Redux/ActionCreators";


const RecentContainerMemo = React.memo(
    function RecentContainer(props) {

        console.log('RecentContainer')



        let [queryParams, setParams ] = useState({
            baseUrl: 'https://api.kinopoisk.cloud',
            page: 1,
            message: 'message'
        })

        const {baseUrl, page, message} = queryParams
        const {filter} = props




        // useEffect(() => {
        //     props.isFetchingAC(true)
        //     axios.get(`${baseUrl}/${filter}/all/page/${page}/token/5d1a70fffb0fa08c373285cd69378048`)
        //         .then(response => response.data)
        //         .then(response => props.addFilmsAC(response[filter]))
        //         .catch((response) => console.log(response[message]))
        //
        //     setTimeout(() => {
        //         props.isFetchingAC(false)
        //     }, 1000)
        //
        //
        // },[])

        let handleSetFilter = (filter) => {
            props.setFilter(filter)
        }





        return (
            <Fragment>
                <Recent films={props.films}
                        isFetching={props.isFetching}
                        handleSetFilter={handleSetFilter}

                />
            </Fragment>
        );
    }


)

const MapStateToProps = (state) => {
    return {
        films: state.RecentReducer.films,
        isFetching: state.RecentReducer.isFetching,
        filter: state.RecentReducer.filter
    }
}

export default connect(MapStateToProps, {addFilmsAC, isFetchingAC, setFilter})(RecentContainerMemo);