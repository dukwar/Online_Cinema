import {ADDFILM, ADDFILMS, ISFETCHING, SETFILTER} from "./constants";

export const addFilmsAC = (data) => {
    return {
        type: ADDFILMS,
        data
    }

}

export const addFilmAC = (data) => {
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