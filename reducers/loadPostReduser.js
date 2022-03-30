import React from 'react'
import actionTypes from '../Configs/actionTypes'
const initialState = {
    loading: false,
    loaded: false,
    post: [],
}

function loadPostReduser(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_LIST_POST_STARTED:
            return {
                ...state,
                loading: action.payload.loading,
                loaded: action.payload.loaded,
                post: action.payload.post,
            }
        case actionTypes.GET_LIST_POST_SUCCESS:
            return {
                ...state,
                loading: action.payload.loading,
                loaded: action.payload.loaded,
                post: action.payload.post,
            }
        case actionTypes.GET_LIST_POST_FAILED:
            return {
                loading: action.payload.loading,
                loaded: action.payload.loaded,
                post: action.payload.post,
                error: action.payload.error,
            }

        default:
            return state
    }
}

export default loadPostReduser