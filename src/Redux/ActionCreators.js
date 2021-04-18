import {ADDFILM, ISFETCHING, SETFILTER} from "./constants";

export const addFilmsAC = (data) => {
    return {
        type: ADDFILM,
        data
    }

}

export const isFetchingAC = (isFetching) => {
    return {
        type: ISFETCHING,
        isFetching
    }
}

export const setFilter = (filter) => {
    return {
        type: SETFILTER,
        filter
    }

}