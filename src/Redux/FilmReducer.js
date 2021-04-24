import {ADDFILM} from "./constants";

const initialState = {
    film: ''

}



const FilmReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADDFILM:
            debugger

            return {
                ...state,
                film: action.data

            }


        default:
            return state

    }
}

export default FilmReducer
