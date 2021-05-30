import {CREATE_POST, GET_POSTS, FETCH_POST} from '../actionTypes'

const initialState = {
    posts: [],
    detailedView : null
}

const reducerFunc = (state=initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts : action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                detailedView : action.payload,
                posts : [action.payload, ...state.posts]
            }
        case FETCH_POST:
            return {
                ...state,
                detailedView: action.payload
            }
        default : return state
    }
}

export default reducerFunc
