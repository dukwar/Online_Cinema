import {ADDFILM, ISFETCHING, SETFILTER} from "./constants";

const initialState = {
    films: [
        {title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5510/560x302/p_b7abe8e.jpg'},
        {title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5506/560x302/p_6284fb7.jpg'},
        {title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5441/560x302/p_e85944a.jpg'},
        {title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5438/560x302/p_7f1c768.jpg'},
        {title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5502/560x302/p_5bbeaac.jpg'},
        {title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5490/560x302/p_ee13835.jpg'},

    ],

    isFetching: false,
    filter: 'tv-series'


}



const RecentReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADDFILM:

            return {
                ...state,
                films: [...action.data]

            }

        case ISFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case SETFILTER:
            debugger

            return {
                ...state,
                filter: action.filter
            }





        default:
            return state

    }
}

export default RecentReducer